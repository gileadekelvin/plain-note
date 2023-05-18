'use client';

import TextareaAutosize from '@/components/TextareaAutosize';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

export const runtime = 'edge';

export default function NewNote() {
  const [noteValue, setNoteValue, initialLoading] = useLocalStorage<string>('note', '');

  return (
    <section className='space-y-6 pb-8 pt-4'>
      <div className='container flex max-w-[64rem] flex-col px-3'>
        <TextareaAutosize
          value={noteValue}
          onChange={(event) => {
            event.preventDefault();
            return setNoteValue(event.target.value);
          }}
          rows={1}
          placeholder={!initialLoading ? 'write a note...' : ''}
          className='h-auto resize-none overflow-hidden border-none p-0 text-sm font-medium focus:ring-transparent focus-visible:outline-none focus-visible:ring-transparent dark:border-none dark:focus:ring-transparent dark:focus:ring-offset-transparent dark:focus-visible:outline-none md:min-w-[600px]'
        />
      </div>
    </section>
  );
}
