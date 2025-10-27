import { StatCard } from '@/components/dashboard/StatCard';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { SmartTips } from '@/components/dashboard/SmartTips';
import { mockUserPerformance } from '@/lib/data';
import { AppLayout } from '@/components/AppLayout';
import { RealTimeClock } from '@/components/dashboard/RealTimeClock';
import { WeatherWidget } from '@/components/dashboard/WeatherWidget';

export default function DashboardPage() {
  const { totalCorrect, totalAnswered } = mockUserPerformance;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
              <p className="text-muted-foreground">Here&apos;s a summary of your progress. Keep up the great work!</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <WeatherWidget />
              <RealTimeClock />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <StatCard
                  title="Total Correct Answers"
                  value={totalCorrect.toString()}
                  description="Your all-time correct answers"
              />
              <StatCard
                  title="Total Questions Answered"
                  value={totalAnswered.toString()}
                  description="Total questions you've attempted"
              />
              <StatCard
                  title="Overall Accuracy"
                  value={`${accuracy}%`}
                  description="Your overall answering accuracy"
              />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                  <PerformanceChart performanceData={mockUserPerformance.categoryPerformance} />
              </div>
              <div className="lg:col-span-1">
                  <SmartTips />
              </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
