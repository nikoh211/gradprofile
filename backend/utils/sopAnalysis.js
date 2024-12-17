const sopCriteria = require('../data/sopDatabase');

function analyzeStructure(sop) {
  const sections = Object.keys(sopCriteria.structure);
  const analysis = {};
  
  sections.forEach(section => {
    const elements = sopCriteria.structure[section].elements;
    const weight = sopCriteria.structure[section].weight;
    let score = 0;
    
    elements.forEach(element => {
      if (sop.toLowerCase().includes(element.toLowerCase())) {
        score += weight;
      }
    });
    
    analysis[section] = Math.min(10, (score / elements.length) * 10);
  });
  
  return analysis;
}

// Export other functions...

module.exports = {
  analyzeStructure,
  analyzeContent,
  generateSuggestions,
  calculateRating
}; 