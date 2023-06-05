import React, { useState } from "react";

import { CircularProgress } from "@mui/material";

import { CountryListType } from "../../types/types";
import CountryItem from "./CountryItem";
import Search from "../../components/countrySearch/Search";

type Prop = {
  setCountries: React.Dispatch<CountryListType[]>;
  countries: CountryListType[];
  favCountries: CountryListType[];
  setFavCountries: React.Dispatch<CountryListType[]>;
  isLoading: boolean;
};

export default function Countries({
  isLoading,
  countries,
  favCountries,
  setFavCountries,
}: Prop) {
  const [search, setSearch] = useState<string>("");
  const filteredCountryList = countries.filter((country) => {
    return !search
      ? countries
      : country.name.common.toLowerCase().includes(search.toLowerCase());
  });
  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else
    return (
      <div>
        <Search  setSearch={setSearch} />
        <CountryItem
          favCountries={favCountries}
          setFavCountries={setFavCountries}
          filteredCountryList={filteredCountryList}
        />
      </div>
    );
}
