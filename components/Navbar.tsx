import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 w-full bg-white'>
      <div className='mx-auto px-4 md:px-16 lg:px-48'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-row justify-start'>
            <Link key='main' href='/' className='text-lg font-bold'>
              Plain Note
            </Link>
          </div>
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
