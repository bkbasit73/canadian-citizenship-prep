'use client';

import type React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home,
    Timer,
    BookOpen,
    Gamepad2,
    ClipboardCheck,
    HeartHandshake
} from 'lucide-react';
import { MapleLeafIcon } from './icons/MapleLeafIcon';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

export function AppLayoutClient() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/practice', label: 'Timed Challenge', icon: Timer },
    { href: '/study', label: 'Discover Canada', icon: BookOpen },
    { href: '/game', label: 'Survival mode Game', icon: Gamepad2 },
    { href: '/demo-test', label: 'Official Practice Test', icon: ClipboardCheck },
  ];

  return (
      <Sidebar
        variant="sidebar"
        collapsible="icon"
        className="border-r border-sidebar-border"
      >
        <SidebarHeader className="p-4">
          <Link href="/" className="flex items-center gap-3 text-sidebar-foreground">
             <MapleLeafIcon className="h-10 w-10 text-red-500" />
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
        <SidebarFooter>
          <SidebarSeparator />
           <div className="p-2 flex flex-col gap-2">
             <Button asChild variant="default" className="justify-start group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-0">
                <Link href="https://terryfox.org/donate/" target="_blank" rel="noopener noreferrer">
                    <HeartHandshake className="group-data-[collapsible=icon]:size-4"/>
                    <span className="group-data-[collapsible=icon]:hidden">Donate</span>
                </Link>
             </Button>
           </div>
        </SidebarFooter>
      </Sidebar>
  );
}
