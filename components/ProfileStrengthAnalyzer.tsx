import { Progress } from "@/components/ui/progress"

export function ProfileStrengthAnalyzer() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-base sm:text-lg font-medium">GPA</span>
          <span className="text-base sm:text-lg font-medium">85%</span>
        </div>
        <Progress value={85} className="h-2 sm:h-3 bg-gray-100" />
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-base sm:text-lg font-medium">GRE Score</span>
          <span className="text-base sm:text-lg font-medium">75%</span>
        </div>
        <Progress value={75} className="h-2 sm:h-3 bg-gray-100" />
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-base sm:text-lg font-medium">Research Experience</span>
          <span className="text-base sm:text-lg font-medium">60%</span>
        </div>
        <Progress value={60} className="h-2 sm:h-3 bg-gray-100" />
      </div>
    </div>
  )
}

