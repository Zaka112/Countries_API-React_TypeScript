export type CountryListType = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  independent: boolean;
  languages: { [key: string]: string };
  flags: { [key: string]: string };
  population: number;
  continents: string;
  maps: { googleMaps: string; openStreetMaps: string };
  latlng: number[];
};
