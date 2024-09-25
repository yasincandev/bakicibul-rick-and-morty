'use client';
import Link from 'next/link';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import React from 'react';

interface IPaginationProps {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

const Pagination: React.FC<IPaginationProps> = ({ info }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const totalPages = info.pages; // Total pages from the API

  // Configuration for displaying ellipsis and the number of sibling pages
  const siblingCount = 1; // Number of pages to display on either side of the current page

  const renderPageLink = (pageNumber: number, isCurrent: boolean) => (
    <Link
      key={pageNumber}
      href={`?page=${pageNumber}`}
      className={`inline-flex items-center px-4 text-sm transition-colors ${
        isCurrent
          ? 'border-indigo-500 font-extrabold text-indigo-600'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-indigo-600 dark:text-gray-100 dark:hover:text-indigo-600'
      }`}
      aria-current={isCurrent ? 'page' : undefined}
    >
      {pageNumber}
    </Link>
  );

  const renderEllipsis = (key: string) => (
    <span
      key={key}
      className='inline-flex items-center px-4 text-sm font-medium text-gray-500 dark:text-gray-100'
    >
      ...
    </span>
  );

  const getPageNumbers = () => {
    const pages = [];

    // Calculate left and right sibling indexes
    const leftSiblingIndex = Math.max(page - siblingCount, 2); // Start from 2 to avoid duplicate 1
    const rightSiblingIndex = Math.min(page + siblingCount, totalPages - 1); // Adjusted to avoid duplicate last page

    const shouldShowLeftEllipsis = leftSiblingIndex > 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

    // Always show the first page
    pages.push(renderPageLink(1, page === 1));

    // Show left ellipsis if necessary
    if (shouldShowLeftEllipsis) {
      pages.push(renderEllipsis('left-ellipsis'));
    }

    // Display pages between the siblings
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      if (i === page) pages.push(renderPageLink(i, true));
      else pages.push(renderPageLink(i, false));
    }

    // Show right ellipsis if necessary
    if (shouldShowRightEllipsis) {
      pages.push(renderEllipsis('right-ellipsis'));
    }

    // Always show the last page if it's not already included
    if (totalPages > 1 && rightSiblingIndex < totalPages) {
      pages.push(renderPageLink(totalPages, page === totalPages));
    }

    return pages;
  };

  const handleNext = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', (page + 1).toString());
    router.push(`${pathname}?${params.toString()}`);
  };
  const handlePrev = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', (page - 1).toString());
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <nav className='mx-auto mt-auto flex w-full max-w-md items-center justify-between pb-4 pt-10'>
      <button
        aria-label='Go to previous page'
        onClick={handlePrev}
        className={`inline-flex items-center gap-4 pr-1 text-sm font-medium transition-colors ${
          info.prev
            ? 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500'
            : 'cursor-not-allowed text-gray-300 dark:text-gray-500'
        }`}
        disabled={!info.prev}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
          />
        </svg>
        Previous
      </button>

      {/* Pagination links */}
      <div className='flex items-center'>{getPageNumbers()}</div>

      <button
        aria-label='Go to next page'
        onClick={handleNext}
        className={`inline-flex items-center gap-4 pl-1 text-sm font-medium transition-colors ${
          info.next
            ? 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500'
            : 'cursor-not-allowed text-gray-300 dark:text-gray-500'
        }`}
        disabled={!info.next}
      >
        Next
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
          />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
