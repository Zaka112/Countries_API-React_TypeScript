import React, { useEffect, useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Countries from "./pages/country/Countries";
import { CountryListType } from "./types/types";
import Favorite from "./pages/country/Favorite";
import CountryDetails from "./pages/country/CountryDetail";

const countriesURL = "https://restcountries.com/v3.1/all";
function App() {
  const [countries, setCountries] = useState<CountryListType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //const [search, setSearch] = useState<string[]>([]);
  const [favCountries, setfavCountries] = useState<CountryListType[]>([]);

  useEffect(() => {
    fetch(countriesURL)
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        setCountries(result);
      })
      .catch((error) => error);
  }, []);
 
  return (
    <div className="App">
      <NavBar favCountries={favCountries} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route
          path="/country/countries"
          element={
            <Countries
              countries={countries}
              setCountries={setCountries}
              isLoading={isLoading}
              favCountries={favCountries}
              setFavCountries={setfavCountries}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/favorite"
          element={<Favorite favCountries={favCountries} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/country/countrydetails/:id"
          element={<CountryDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
