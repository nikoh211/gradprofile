import { Badge } from "@/components/ui/badge"

const universities = [
  { name: 'Stanford University', probability: 85 },
  { name: 'MIT', probability: 75 },
  { name: 'Harvard University', probability: 70 },
  { name: 'UC Berkeley', probability: 80 },
  { name: 'Carnegie Mellon University', probability: 78 },
];

export function AcceptanceProbability() {
  return (
    <div className="space-y-4">
      {universities.map((uni) => (
        <div key={uni.name} className="flex items-center justify-between">
          <span className="font-medium">{uni.name}</span>
          <Badge 
            variant={uni.probability > 80 ? "success" : uni.probability > 60 ? "warning" : "destructive"}
          >
            {uni.probability}%
          </Badge>
        </div>
      ))}
    </div>
  )
}

