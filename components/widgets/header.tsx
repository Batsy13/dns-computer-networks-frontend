import Link from 'next/link';
import { LogoutButton } from '../features/logout-button';

export function Header() {
  return (
    <header className="w-full border-b bg-linear-to-br from-[#d11919] to-[#ec1a1a]">
      <nav className="container mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-white">
          RR-DNS Project
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/me" className='text-white'>
            Profile
          </Link>
          <LogoutButton />
        </div>
      </nav>
    </header>
  );
}