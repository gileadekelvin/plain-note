import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Create a Note',
  description: 'Write just a note',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='space-y-6'>
      <div className='container flex max-w-[64rem] flex-col'>
        <div className='sticky top-14 z-40 flex flex-row justify-start gap-2 bg-white'>
          <Button size='sm' variant='ghost'>
            Save Note
          </Button>
          <Button size='sm' variant='ghost'>
            Share
          </Button>
        </div>
        {children}
      </div>
    </section>
  );
}
