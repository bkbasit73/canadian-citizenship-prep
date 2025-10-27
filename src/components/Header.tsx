import Link from 'next/link';
import { MapleLeafIcon } from '@/components/icons/MapleLeafIcon';
import { SidebarTrigger } from './ui/sidebar';
import { RealTimeClock } from './RealTimeClock';

export function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6">
      <nav className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg md:text-base">
          <MapleLeafIcon className="h-10 w-10 text-primary" />
        </Link>
        <SidebarTrigger className="md:hidden" />
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <RealTimeClock />
      </div>
    </header>
  );
}
