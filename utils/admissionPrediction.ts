import { University } from '@/data/universities'

interface Scores {
  gpa: number;
  greScore?: number;
  gmatScore?: number;
  toeflScore?: number;
  ieltsScore?: number;
  researchPapers: number;
  workExperience: number;
}

export function calculateAdmissionProbability(
  university: University,
  program: string,
  scores: Scores
): number {
  const requirements = university.programs[program].requirements;
  
  // Base probability from acceptance rate
  let probability = university.acceptanceRate * 100;

  // GPA factor (weighted 30%)
  const gpaFactor = Math.min(
    ((scores.gpa - requirements.minGPA) / (4.0 - requirements.minGPA)) * 30,
    30
  );

  // Test scores factor (weighted 25%)
  let testScoreFactor = 0;
  if (scores.greScore && requirements.greScore) {
    testScoreFactor = Math.min(
      ((scores.greScore - requirements.greScore.min) / 
      (requirements.greScore.preferred - requirements.greScore.min)) * 25,
      25
    );
  }

  // Research and experience factor (weighted 25%)
  const researchFactor = Math.min(
    (scores.researchPapers / (requirements.researchPapers || 1)) * 12.5,
    12.5
  );
  const experienceFactor = Math.min(
    (scores.workExperience / (requirements.workExperience || 1)) * 12.5,
    12.5
  );

  // Calculate final probability
  probability = probability + gpaFactor + testScoreFactor + researchFactor + experienceFactor;

  // Normalize between 0 and 100
  return Math.min(Math.max(probability, 0), 100);
} 