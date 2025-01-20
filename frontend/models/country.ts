export type Country = {
  id: string;
  name: string;
  capitalCity: string;
  region: string;
  subRegion: string;
};

export type CountryWithVote = Country & {
  _count: {
    votes: number;
  };
};

export type TableCountry = Country & {
  votes: number;
};
