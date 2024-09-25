import Filters from '@/components/Home/Filters';
import CharacterCard from '@/components/Shared/CharacterCard';
import { CharactersRequest } from '@/interfaces';
import { fetchCharacters } from './actions/fetchCharacters';
import Pagination from '@/components/UI/Pagination';
import { Suspense } from 'react';
import CharacterCardSkeleton from '@/components/Shared/CharacterCardSkeleton';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { gender, status, page } = searchParams;

  const validGender = typeof gender === 'string' ? gender : undefined;
  const validStatus = typeof status === 'string' ? status : undefined;

  const characters: CharactersRequest = await fetchCharacters({
    gender: validGender,
    status: validStatus,
    page: page ? Number(page) : 1,
  });

  const { pages } = characters.info;

  return (
    <div
      className='flex flex-col p-4'
      style={{
        height: 'calc(100vh - 75px)',
      }}
    >
      {/* Filters */}
      <div className='flex justify-end'>
        <Filters />
      </div>

      {/* Character List */}
      <Suspense
        fallback={
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5'>
            {Array.from({ length: 20 }, (_, index) => (
              <CharacterCardSkeleton key={index} />
            ))}
          </div>
        }
      >
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5'>
          {characters?.results?.map((character, index) => (
            <CharacterCard
              key={character.id}
              index={index}
              character={character}
            />
          ))}
        </div>
      </Suspense>
      {/* Pagination */}
      {pages > 1 && <Pagination info={characters.info} />}
    </div>
  );
}
