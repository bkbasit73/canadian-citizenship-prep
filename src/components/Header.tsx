import Link from 'next/link';
import { CanadianFlagIcon } from '@/components/icons/CanadianFlagIcon';
import { SidebarTrigger } from './ui/sidebar';

export function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6">
      <nav className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg md:text-base">
          <CanadianFlagIcon className="h-7 w-7" />
          <span className="hidden md:inline-block font-bold">True North Quiz</span>
        </Link>
        <SidebarTrigger className="md:hidden" />
      </nav>
      <div className="ml-auto flex items-center gap-4">
        {/* User menu can be added back here if authentication is implemented */}
      </div>
    </header>
  );
}
