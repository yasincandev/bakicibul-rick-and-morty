'use client';
import Select from '@/components/UI/Select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useTransition } from 'react';

const Filters = () => {
  let [pending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const status = searchParams.get('status');
  const gender = searchParams.get('gender');

  const handleSelectFilter = (key: 'status' | 'gender', value: string) => {
    startTransition(() => {
      const url = new URL(window.location.href);
      if (!value) {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, value);
        url.searchParams.delete('page');
      }

      router.push(`${pathname}?${url.searchParams.toString()}`);
    });
  };

  const clearFilters = () => {
    router.push(pathname); // Clear query params
  };

  const isFiltersPresent = status || gender;
  return (
    <div className='mb-6 flex items-end space-x-4 max-sm:w-full max-sm:flex-col max-sm:gap-4'>
      <Select
        options={['Dead', 'Alive', 'unknown']}
        label='Filter by Status'
        value={status ?? ''}
        onChange={(e) => {
          handleSelectFilter('status', e.target.value);
        }}
        id='status'
        name='status'
        placeholder='All'
      />

      <Select
        options={['Male', 'Female', 'Genderless', 'unknown']}
        label='Filter by Gender'
        value={gender ?? ''}
        onChange={(e) => {
          handleSelectFilter('gender', e.target.value);
        }}
        id='gender'
        name='gender'
        placeholder='All'
      />

      <button
        type='button'
        onClick={clearFilters}
        disabled={pending || !isFiltersPresent}
        className={`ml-4 rounded-md bg-gray-300 px-4 py-2 text-black shadow-lg disabled:cursor-not-allowed dark:bg-gray-700 dark:text-white max-sm:w-full`}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
