import React from "react";

import { CircularProgress } from "@mui/material";
//import Search from "../../components/country/Search";
import { CountryListType } from "../../types/types";
//import CountryList from "./CountryList";
import CountryItem from "./CountryItem";

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
 // setCountries,
}: Prop) {
  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else
    return (
      <div>
        <CountryItem
          countries={countries}
          favCountries={favCountries}
          setFavCountries={setFavCountries}
        />
        {/* <Search countries={countries}  /> */}
        {/* {countries.map((country)=> {
            return <CountryItem countries={countries} key={country.name.common} />
          })} */}
      </div>
    );
}
