const CHAT_RESPONSES = {
  greeting: [
    "Hello! I'm your graduate school application assistant. How can I help you today?",
    "Welcome! I'm here to help with your grad school journey. What would you like to know?"
  ],
  sop: [
    "For your Statement of Purpose, consider highlighting these key elements:\n1. Your academic background\n2. Research experience\n3. Career goals\n4. Why this specific program\nWould you like me to elaborate on any of these?",
  ],
  universities: [
    "I can help you research universities based on:\n- Your GPA\n- Test scores\n- Research interests\n- Location preferences\nWhat matters most to you?",
  ],
  default: [
    "I'm here to help! Would you like to know about:\n1. SOP writing\n2. University selection\n3. Application requirements\n4. Test preparation",
  ]
};

export function generateResponse(input: string): string {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
    return CHAT_RESPONSES.greeting[Math.floor(Math.random() * CHAT_RESPONSES.greeting.length)];
  }
  
  if (lowerInput.includes('sop') || lowerInput.includes('statement')) {
    return CHAT_RESPONSES.sop[0];
  }
  
  if (lowerInput.includes('university') || lowerInput.includes('college')) {
    return CHAT_RESPONSES.universities[0];
  }
  
  return CHAT_RESPONSES.default[0];
} 