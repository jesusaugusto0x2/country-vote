type NativeName = {
  official: string;
  common: string;
};

export type RestCountry = {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, NativeName>;
  };
  capital: string[];
  region: string;
  subregion: string;
};
