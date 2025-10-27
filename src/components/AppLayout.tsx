'use client';

import type React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
    Home,
    ClipboardList,
    BookOpen,
    Gamepad2
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { Header } from './Header';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/practice', label: 'Timed Challenge', icon: ClipboardList },
    { href: '/game', label: 'Game', icon: Gamepad2 },
    { href: '/study', label: 'Study Mode', icon: BookOpen },
  ];

  return (
    <SidebarProvider>
      <Sidebar
        variant="sidebar"
        collapsible="icon"
        className="border-r border-sidebar-border"
      >
        <SidebarHeader className="p-4">
          <Link href="/" className="flex items-center gap-3 text-sidebar-foreground">
             <span className="text-xl font-bold">Citizenship Challenge</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
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
