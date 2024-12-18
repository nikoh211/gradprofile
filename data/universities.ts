export const universities = {
  USA: [
    {
      name: 'Massachusetts Institute of Technology',
      ranking: 1,
      deadlines: {
        fall2024: '2023-12-15',
        spring2024: '2023-09-15'
      },
      programs: ['Computer Science', 'Data Science', 'Electrical Engineering'],
      requirements: {
        minGPA: 3.8,
        greScore: { min: 325, preferred: 335 },
        toeflScore: { min: 100, preferred: 110 }
      }
    },
    {
      name: 'Stanford University',
      ranking: 2,
      deadlines: {
        fall2024: '2023-12-01',
        spring2024: '2023-09-01'
      },
      programs: ['Computer Science', 'AI', 'Data Science'],
      requirements: {
        minGPA: 3.7,
        greScore: { min: 320, preferred: 330 },
        toeflScore: { min: 100, preferred: 110 }
      }
    },
    // Add 5 more universities for USA...
  ],
  UK: [
    {
      name: 'University of Cambridge',
      ranking: 3,
      deadlines: {
        fall2024: '2024-01-05',
        spring2024: '2023-10-15'
      },
      programs: ['Computer Science', 'Engineering', 'Mathematics'],
      requirements: {
        minGPA: 3.7,
        ieltsScore: { min: 7.0, preferred: 7.5 }
      }
    },
    // Add 6 more top UK universities
  ],
  Germany: [
    {
      name: 'Technical University of Munich',
      ranking: 12,
      deadlines: {
        winterSemester: '2024-01-15',
        summerSemester: '2023-07-31'
      },
      programs: ['Informatics', 'Data Engineering', 'Robotics'],
      requirements: {
        minGPA: 3.0,
        germanLevel: 'B2',
        ieltsScore: { min: 6.5 }
      }
    },
    // Add 6 more top German universities
  ],
  Australia: [
    {
      name: 'University of Melbourne',
      ranking: 15,
      deadlines: {
        semester1: '2024-01-31',
        semester2: '2024-05-31'
      },
      programs: ['Computing', 'IT', 'Software Engineering'],
      requirements: {
        minGPA: 3.3,
        ieltsScore: { min: 6.5, preferred: 7.0 }
      }
    },
    // Add 6 more top Australian universities
  ]
} 