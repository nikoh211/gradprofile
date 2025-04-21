'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const scholarships = [
  { name: 'Merit Scholarship', amount: '$20,000', deadline: '2024-01-15', type: 'Merit-based' },
  { name: 'Need-based Grant', amount: '$15,000', deadline: '2024-02-01', type: 'Need-based' },
  { name: 'STEM Fellowship', amount: '$25,000', deadline: '2024-03-15', type: 'Field-specific' },
  { name: 'International Student Award', amount: '$10,000', deadline: '2024-02-28', type: 'International' },
];

export function FinancialAidAssistance() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <ScrollArea className="w-full" style={{ maxWidth: '100vw' }}>
          <div className="min-w-[600px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Scholarship</TableHead>
                  <TableHead className="font-semibold">Amount</TableHead>
                  <TableHead className="font-semibold">Deadline</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scholarships.map((scholarship) => (
                  <TableRow key={scholarship.name}>
                    <TableCell className="font-medium">{scholarship.name}</TableCell>
                    <TableCell>{scholarship.amount}</TableCell>
                    <TableCell>{scholarship.deadline}</TableCell>
                    <TableCell>{scholarship.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

