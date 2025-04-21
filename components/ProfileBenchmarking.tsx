'use client'

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ResponsiveContainer = dynamic(() => import('recharts').then((mod) => mod.ResponsiveContainer), { ssr: false });
const BarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then((mod) => mod.Bar), { ssr: false });
const XAxis = dynamic(() => import('recharts').then((mod) => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then((mod) => mod.YAxis), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then((mod) => mod.Tooltip), { ssr: false });

const benchmarkData = [
  { name: 'GPA', you: 3.8, average: 3.7 },
  { name: 'GRE', you: 320, average: 315 },
  { name: 'TOEFL', you: 105, average: 100 },
  { name: 'Research Papers', you: 2, average: 1.5 },
  { name: 'Internships', you: 2, average: 1 },
];

export function ProfileBenchmarking() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Profile vs Average Applicant</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 300 }}>
          {!isMounted ? (
            <Skeleton className="w-full h-full" />
          ) : (
            <ResponsiveContainer>
              <BarChart data={benchmarkData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="you" fill="#8884d8" name="Your Profile" />
                <Bar dataKey="average" fill="#82ca9d" name="Average Applicant" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            This chart compares your profile with the average successful applicant. 
            Your GPA and GRE scores are above average, which is great! 
            Consider focusing on gaining more research experience to further strengthen your application.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

