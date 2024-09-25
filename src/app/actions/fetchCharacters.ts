'use server';

export async function fetchCharacters({
  gender,
  status,
  page,
}: {
  gender?: string;
  status?: string;
  page?: number;
}) {
  const params = new URLSearchParams();
  if (page) params.append('page', page.toString());
  if (gender) params.append('gender', gender);
  if (status) params.append('status', status);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character?${params.toString()}`
  );
  if (!response.ok) throw new Error('Failed to fetch characters');

  const data = await response.json();

  return data;
}
