import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export const runtime = 'edge';

export default function Home() {
  return (
    <section className='space-y-6 pb-8 pt-12 md:pb-12 md:pt-10 lg:py-36'>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
        <Link
          href='https://twitter.com/gileadekelvin'
          className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium'
          target='_blank'
        >
          Follow along on Twitter
        </Link>
        <h1 className='text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>Plain Note</h1>
        <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          Bring simplicity back to note-taking and unleash your creativity. Just write simple notes
          and share knowledge!
        </p>
        <div className='space-x-4'>
          <Link href='/dashboard' className={cn(buttonVariants({ size: 'lg' }))}>
            Get Started
          </Link>
          <Link
            href='https://github.com/gileadekelvin/plain-note'
            target='_blank'
            rel='noreferrer'
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
