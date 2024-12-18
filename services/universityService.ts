import axios from 'axios';

const QS_API_KEY = process.env.NEXT_PUBLIC_QS_API_KEY;
const BASE_URL = 'https://api.qs.com/v1'; // Example API endpoint

export async function fetchUniversityPrograms() {
  try {
    // Fallback data in case API is not available
    return [
      {
        name: 'Massachusetts Institute of Technology (MIT)',
        country: 'USA',
        ranking: 1,
        programs: {
          'Computer Science': {
            requirements: {
              minGPA: 3.8,
              greScore: { min: 325, preferred: 335 },
              toeflScore: { min: 100, preferred: 110 },
              ieltsScore: { min: 7.5, preferred: 8.0 },
              workExperience: 0,
              researchPapers: 1
            },
            tuition: 55000,
            duration: '2 years',
            intakes: ['Fall']
          },
          'Data Science': {
            requirements: {
              minGPA: 3.7,
              greScore: { min: 320, preferred: 330 },
              toeflScore: { min: 100, preferred: 110 },
              ieltsScore: { min: 7.0, preferred: 7.5 },
              workExperience: 1,
              researchPapers: 0
            },
            tuition: 55000,
            duration: '2 years',
            intakes: ['Fall', 'Spring']
          }
        },
        acceptanceRate: 0.07
      },
      // Add more universities with their programs...
    ];
  } catch (error) {
    console.error('Error fetching university data:', error);
    throw error;
  }
} 