'use client';

import { AppLayout } from '@/components/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GamePage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Game Mode</h1>
            <p className="text-muted-foreground">
              A new game mode is coming soon!
            </p>
          </div>
          <Card>
            <CardHeader>
                <CardTitle>Coming Soon!</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Get ready for an exciting new way to test your knowledge.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
