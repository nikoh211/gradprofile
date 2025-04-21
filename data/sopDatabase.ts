export const sopCriteria = {
  structure: {
    introduction: {
      elements: ['hook', 'background', 'objective'],
      weight: 2
    },
    academicBackground: {
      elements: ['relevant_courses', 'projects', 'achievements'],
      weight: 2
    },
    researchExperience: {
      elements: ['methodology', 'findings', 'impact'],
      weight: 2.5
    },
    programFit: {
      elements: ['faculty_alignment', 'resources', 'specific_interests'],
      weight: 2
    },
    futureGoals: {
      elements: ['short_term', 'long_term', 'alignment_with_program'],
      weight: 1.5
    }
  },
  
  commonPatterns: {
    positive: [
      "specific examples of research experience",
      "clear connection to faculty work",
      "concrete future goals",
      "unique personal narrative"
    ],
    negative: [
      "generic statements",
      "lack of specific examples",
      "overuse of adjectives",
      "unfocused narrative"
    ]
  }
} 