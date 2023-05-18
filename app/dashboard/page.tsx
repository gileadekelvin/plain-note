import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const runtime = 'edge';

export default function Dashboard() {
  return (
    <section className='space-y-6 pb-8 pt-4'>
      <div className='container flex max-w-[88rem] flex-col'>
        <Link href='/note/new'>
          <Button variant='outline'>Add Note</Button>
        </Link>
      </div>
    </section>
  );
}
