'use client';

import TextareaAutosize from '@/components/TextareaAutosize';

export const runtime = 'edge';

export default function NewNote() {
  return (
    <section className='space-y-6 pb-8 pt-4'>
      <div className='container flex max-w-[64rem] flex-col px-3'>
        <TextareaAutosize
          rows={1}
          placeholder='write a note...'
          className='h-auto resize-none border-none p-0 focus:ring-transparent focus-visible:outline-none focus-visible:ring-transparent dark:border-none dark:focus:ring-transparent dark:focus:ring-offset-transparent dark:focus-visible:outline-none md:min-w-[600px]'
        />
      </div>
    </section>
  );
}
