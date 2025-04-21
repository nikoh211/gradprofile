import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const applications = [
  { university: 'Stanford University', program: 'Computer Science', deadline: '2024-01-15', status: 'In Progress' },
  { university: 'MIT', program: 'Electrical Engineering', deadline: '2024-02-01', status: 'Submitted' },
  { university: 'Harvard University', program: 'Data Science', deadline: '2024-03-01', status: 'Accepted' },
  { university: 'UC Berkeley', program: 'Artificial Intelligence', deadline: '2024-02-15', status: 'In Progress' },
];

export function ApplicationTracker() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>University</TableHead>
          <TableHead>Program</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app) => (
          <TableRow key={app.university}>
            <TableCell className="font-medium">{app.university}</TableCell>
            <TableCell>{app.program}</TableCell>
            <TableCell>{app.deadline}</TableCell>
            <TableCell>
              <Badge variant={
                app.status === 'Accepted' ? "success" :
                app.status === 'Submitted' ? "warning" : "default"
              }>
                {app.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

