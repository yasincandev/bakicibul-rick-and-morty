import React from 'react';
import Image from 'next/image';

import { Character } from '@/interfaces';

interface ICharacterCardProps {
  character: Character;
  index: number;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character, index }) => {
  return (
    <div className='h-full overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-110 dark:bg-gray-700'>
      <Image
        width={300}
        height={300}
        src={character.image}
        alt={character.name}
        className='aspect-square w-full object-cover'
      />
      <div className='p-4 dark:text-gray-100'>
        <h2 className='text-lg font-semibold'>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
