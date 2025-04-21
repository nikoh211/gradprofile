import { sopCriteria } from '@/data/sopDatabase'

// Helper functions
function containsElement(text: string, element: string): boolean {
  const elementPatterns = {
    'hook': /(fascinating|passionate|inspired|discovered|journey|moment|realized)/i,
    'background': /(studied|graduated|completed|pursued|degree|major|background)/i,
    'objective': /(aim|goal|aspire|seek|pursue|interest|objective)/i,
    'relevant_courses': /(course|class|studied|learned|project|assignment)/i,
    'projects': /(developed|created|built|implemented|designed|project)/i,
    'achievements': /(achieved|awarded|received|honored|recognized|accomplished)/i,
    'methodology': /(method|approach|technique|analysis|process|procedure)/i,
    'findings': /(found|discovered|results|concluded|determined|identified)/i,
    'impact': /(impact|effect|influence|contribution|difference|value)/i,
    'faculty_alignment': /(professor|faculty|research|work|align|interest)/i,
    'resources': /(lab|facility|center|equipment|resource|opportunity)/i,
    'specific_interests': /(specifically|particularly|especially|focus|area)/i,
    'short_term': /(during|program|study|learn|develop|first|initial)/i,
    'long_term': /(career|future|eventually|ultimately|aspire|become)/i,
    'alignment_with_program': /(program|university|department|school|fit)/i
  };

  if (elementPatterns[element]) {
    return elementPatterns[element].test(text);
  }
  return text.toLowerCase().includes(element.toLowerCase());
}

export function containsPattern(text: string, pattern: string): boolean {
  const patterns = {
    'research experience': /(research|study|experiment|investigation|analysis)/i,
    'faculty alignment': /(professor|faculty|research group|lab|supervisor)/i,
    'specific examples': /((for example|such as|specifically|in particular).*?[.!?])/i,
    'unique narrative': /(my|I|personal|experience|journey)/i,
    'concrete goals': /(aim|goal|plan|aspire|intend|future)/i
  };

  if (patterns[pattern]) {
    return patterns[pattern].test(text);
  }
  return text.toLowerCase().includes(pattern.toLowerCase());
}

export function analyzeStructure(sop: string) {
  const sections = Object.keys(sopCriteria.structure);
  const analysis = {};
  
  sections.forEach(section => {
    const elements = sopCriteria.structure[section].elements;
    const weight = sopCriteria.structure[section].weight;
    let score = 0;
    let matchCount = 0;
    
    elements.forEach(element => {
      if (containsElement(sop, element)) {
        matchCount++;
        score += weight;
      }
    });
    
    // Base score for having content in the section
    if (matchCount > 0) {
      score = Math.max(5, score); // Minimum 5 if section exists
    }
    
    // Bonus for multiple matches
    if (matchCount >= elements.length) {
      score += 2; // Bonus for covering all elements
    }
    
    analysis[section] = Math.min(10, score);
  });
  
  return analysis;
}

export function analyzeContent(sop: string) {
  // Start with a neutral base score
  let score = 5.0;
  
  // Check for key SOP components
  const components = {
    academicBackground: /(academic|education|study|degree|university|college)/i,
    researchExperience: /(research|project|study|investigation|experiment)/i,
    futureGoals: /(goal|aim|future|career|aspire|plan)/i,
    programFit: /(program|department|faculty|university|research group)/i,
    motivation: /(passion|interest|motivation|inspire|drive)/i
  };

  Object.entries(components).forEach(([_, pattern]) => {
    const matches = (sop.match(pattern) || []).length;
    if (matches > 0) {
      score += Math.min(1, matches * 0.2); // Cap contribution from each component
    }
  });

  // Check for depth and specificity
  const specificityIndicators = [
    /specific.*?example/i,
    /for instance/i,
    /in particular/i,
    /professor.*?research/i,
    /experience.*?taught/i
  ];

  specificityIndicators.forEach(pattern => {
    if (pattern.test(sop)) {
      score += 0.5;
    }
  });

  // Penalize for overly short or generic content
  if (sop.split(/\s+/).length < 700) score -= 1;
  if (!/[A-Z][a-z]+ [A-Z][a-z]+/.test(sop)) score -= 1; // No proper nouns

  return Math.min(10, Math.max(1, score));
}

export function generateSuggestions(sop: string) {
  const suggestions = [];
  
  if (!containsPattern(sop, 'research experience')) {
    suggestions.push('Add specific examples of your research experience or academic projects');
  }
  
  if (!containsPattern(sop, 'faculty alignment')) {
    suggestions.push('Mention specific faculty members and how your interests align with their work');
  }
  
  if (!containsPattern(sop, 'specific examples')) {
    suggestions.push('Include more concrete examples to support your statements');
  }
  
  if (!containsPattern(sop, 'unique narrative')) {
    suggestions.push('Make your personal story more prominent and unique');
  }
  
  if (!containsPattern(sop, 'concrete goals')) {
    suggestions.push('Be more specific about your future goals and how this program helps achieve them');
  }
  
  return suggestions;
}

export function calculateRating(sop: string) {
  const structureScore = Object.values(analyzeStructure(sop))
    .reduce((acc: number, val: any) => acc + Number(val), 0) / Object.keys(sopCriteria.structure).length;
  
  const contentScore = analyzeContent(sop);
  
  return Math.round((structureScore * 0.6 + contentScore * 0.4) * 10) / 10;
} 