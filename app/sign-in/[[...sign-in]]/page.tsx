import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className='space-y-6 pb-8 pt-12 md:pb-12 md:pt-10 lg:py-36'>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
        <SignIn />
      </div>
    </section>
  );
}
