import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase';
import { AnonymousSignIn } from '@/components/auth/AnonymousSignIn';

export const metadata: Metadata = {
  title: 'Citizenship Test',
  description: 'Prepare for the Canadian Citizenship Test with interactive quizzes, study materials, and performance tracking.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen')}>
        <FirebaseClientProvider>
          <AnonymousSignIn />
          {children}
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
