'use client';

import { Newspaper } from 'lucide-react';
import Link from 'next/link';
import type { UserPerformance } from '@/lib/types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '../ui/button';

interface SmartTipsProps {
  performanceData: UserPerformance;
}

export function SmartTips({ performanceData }: SmartTipsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper className="text-primary" />
          Citizenship Newsroom
        </CardTitle>
        <CardDescription>
          Latest updates from Immigration, Refugees and Citizenship Canada.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Stay informed about changes to citizenship requirements, test updates,
            and other important announcements directly from the official source.
          </p>
          <Button asChild>
            <Link
              href="https://www.canada.ca/en/immigration-refugees-citizenship/news.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Newsroom
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
