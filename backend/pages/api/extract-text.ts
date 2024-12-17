import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import PDFJs from '@pdftron/pdfjs-express-viewer'
import mammoth from 'mammoth'
import fs from 'fs'
import path from 'path'

export const config = {
  api: {
    bodyParser: false,
  },
}

async function extractTextFromPDF(buffer: Buffer): Promise<string> {
  try {
    const pdf = await PDFJs.getDocument({ data: buffer }).promise;
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map(item => item.str)
        .join(' ');
      fullText += pageText + '\n';
    }
    
    return fullText.trim();
  } catch (error) {
    console.error('PDF extraction error:', error);
    throw new Error('Failed to extract text from PDF. Please ensure the file is not corrupted.');
  }
}

async function extractTextFromDOCX(buffer: Buffer): Promise<string> {
  try {
    const result = await mammoth.extractRawText({ buffer })
    return result.value
  } catch (error) {
    console.error('DOCX extraction error:', error)
    throw new Error('Failed to extract text from DOCX')
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const form = formidable({
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
    })

    const [_, files] = await form.parse(req)
    const file = files.file?.[0]

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' })
    }

    const buffer = fs.readFileSync(file.filepath)
    const fileExtension = file.originalFilename?.split('.').pop()?.toLowerCase()

    let extractedText = ''
    try {
      switch (fileExtension) {
        case 'pdf':
          extractedText = await extractTextFromPDF(buffer)
          break
        case 'docx':
        case 'doc':
          extractedText = await extractTextFromDOCX(buffer)
          break
        default:
          throw new Error(`Unsupported file format: ${fileExtension}`)
      }
    } finally {
      // Clean up the temporary file
      fs.unlinkSync(file.filepath)
    }

    if (!extractedText.trim()) {
      return res.status(400).json({ message: 'No text could be extracted from the file' })
    }

    res.status(200).json({ text: extractedText.trim() })
  } catch (error) {
    console.error('Error processing file:', error)
    const errorMessage = error instanceof Error ? error.message : 'Error processing file'
    res.status(500).json({ message: errorMessage })
  }
} 