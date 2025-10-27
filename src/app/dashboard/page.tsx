import { BarChart3, CheckCircle, Percent, Target } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { SmartTips } from '@/components/dashboard/SmartTips';
import { mockUserPerformance } from '@/lib/data';

export default function DashboardPage() {
  const { totalCorrect, totalAnswered } = mockUserPerformance;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
            <p className="text-muted-foreground">Here&apos;s a summary of your progress. Keep up the great work!</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <StatCard
                  title="Total Correct Answers"
                  value={totalCorrect.toString()}
                  icon={CheckCircle}
                  description="Your all-time correct answers"
              />
              <StatCard
                  title="Total Questions Answered"
                  value={totalAnswered.toString()}
                  icon={Target}
                  description="Total questions you've attempted"
              />
              <StatCard
                  title="Overall Accuracy"
                  value={`${accuracy}%`}
                  icon={Percent}
                  description="Your overall answering accuracy"
              />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                  <PerformanceChart performanceData={mockUserPerformance.categoryPerformance} />
              </div>
              <div>
                  <SmartTips performanceData={mockUserPerformance} />
              </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
