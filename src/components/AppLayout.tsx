import type React from 'react';
import Image from 'next/image';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { Header } from './Header';
import { AppLayoutClient } from './AppLayoutClient';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <AppLayoutClient />
      <SidebarInset>
        <Header />
        <main className="relative flex-1 overflow-auto p-4 md:p-6 lg:p-8">
            <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1593335965251-3f191673076e?q=80&w=2070&auto=format&fit=crop"
                  alt="Canadian flag watermark"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="opacity-10"
                  data-ai-hint="canadian flag"
                />
            </div>
            <div className="relative z-10">
              {children}
            </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
