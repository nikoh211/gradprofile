require('dotenv').config();
const express = require('express');
const cors = require('cors');
const storage = require('./utils/storage');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdf = require('pdf-parse');
const mammoth = require('mammoth');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Ensure uploads directory exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// File upload endpoint
app.post('/api/extract-text', upload.single('file'), async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const buffer = fs.readFileSync(req.file.path);
    const fileExtension = path.extname(req.file.originalname).toLowerCase();
    let extractedText = '';

    if (fileExtension === '.pdf') {
      const pdfOptions = {
        max: 0,
        version: 'v2.0.550',
        pagerender: function(pageData) {
          return pageData.getTextContent();
        }
      };
      const data = await pdf(buffer, pdfOptions);
      extractedText = data.text;
    } else if (fileExtension === '.docx' || fileExtension === '.doc') {
      const result = await mammoth.extractRawText({ buffer });
      extractedText = result.value;
    } else {
      return res.status(400).json({ message: 'Unsupported file format' });
    }

    // Clean up uploaded file
    fs.unlinkSync(req.file.path);

    if (!extractedText.trim()) {
      return res.status(400).json({ message: 'No text could be extracted from file' });
    }

    return res.status(200).json({ text: extractedText.trim() });
  } catch (error) {
    console.error('Error processing file:', error);
    // Clean up uploaded file in case of error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    return res.status(500).json({ message: error.message || 'Error processing file' });
  }
});

// Waitlist endpoint
app.post('/api/waitlist', async (req, res) => {
  try {
    const entry = await storage.add(req.body);
    res.status(201).json({ message: 'Successfully joined waitlist' });
  } catch (error) {
    if (error.message === 'Email already registered') {
      return res.status(400).json({ message: 'Email already registered' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 