export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
};

export type CharactersRequest = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Character[];
};

export type CharaterState = {
  charaters: Character[] | [];
  loading: boolean;
  error: Error | undefined;
  pagination: Pagination;
};

export type Pagination = {
  current: number;
  total: number;
  next: string | undefined;
  prev: string | undefined;
};
