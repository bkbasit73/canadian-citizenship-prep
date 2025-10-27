'use client';

import type React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home,
    ClipboardList,
    BookOpen,
    Gamepad2,
    FileText
} from 'lucide-react';
import { MapleLeafIcon } from './icons/MapleLeafIcon';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

export function AppLayoutClient() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/practice', label: 'Timed Challenge', icon: ClipboardList },
    { href: '/study', label: 'Discover Canada', icon: BookOpen },
    { href: '/game', label: 'Survival Mode', icon: Gamepad2 },
    { href: '/demo-test', label: 'Official Practice Test', icon: FileText },
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
      </Sidebar>
  );
}
