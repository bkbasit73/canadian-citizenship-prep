'use client';

import { Building, Newspaper } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '../ui/button';

export function SmartTips() {
  return (
    <div className="space-y-8">
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="text-primary" />
            Find an Office
          </CardTitle>
          <CardDescription>
            Locate an IRCC office near you for in-person services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
                Find addresses and hours of operation for Immigration, Refugees and 
                Citizenship Canada offices across the country.
            </p>
            <Button asChild>
              <Link
                href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find an IRCC Office
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
