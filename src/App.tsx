import React, { useEffect, useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import Favorite from "./pages/countryPages/Favorite";
import Countries from "./pages/countryPages/Countries";
import { CountryListType } from "./types/types";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CountryDetails from "./pages/countryPages/CountryDetail";

const countriesURL = "https://restcountries.com/v3.1/all";

const theme = createTheme({
  typography: {
    fontFamily: ["Helvetica Neu", "sen-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#ccc",
    },
  },
});
function App() {
  const [countries, setCountries] = useState<CountryListType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar favCountries={favCountries} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
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
          <Route
            path="/favorite"
            element={<Favorite favCountries={favCountries} />}
          />
          <Route
            path="/country/countrydetails/:name"
            element={<CountryDetails />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
