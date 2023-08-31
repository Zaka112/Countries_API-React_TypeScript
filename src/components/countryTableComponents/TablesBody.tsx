import React from "react";

import {
  TableBody,
  TableRow,
  TableCell,
  CardActions,
  IconButton,
  Alert,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { v4 as uuidv4 } from "uuid";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { CountryListType } from "../../types/types";
import { ToastContainer, toast } from "react-toastify";

type Prop = {
  filteredCountryList: CountryListType[];
  page: number;
  rowsPerPage: number;
  favCountries: CountryListType[];
  setFavCountries: React.Dispatch<CountryListType[]>;
  dealFavCountry(newItem: CountryListType): void;
};

export default function TablesBody({
  filteredCountryList,
  page,
  rowsPerPage,
  favCountries,
  dealFavCountry,
}: Prop) {
  return (
    <TableBody>
      {filteredCountryList
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((countryItem) => {
          return (
            <TableRow key={countryItem.name.common}>
              <TableCell>
                <img
                  src={countryItem.flags.svg}
                  alt={countryItem.name.common}
                  width={75}
                  height={75}
                ></img>
              </TableCell>
              <TableCell>{countryItem.name.common}</TableCell>
              <TableCell>{countryItem.continents}</TableCell>
              <TableCell>{countryItem.population}</TableCell>
              <TableCell>
                {countryItem.languages
                  ? Object.entries(countryItem.languages).map((language) => {
                      return <li key={uuidv4()}>{language[1]}</li>;
                    })
                  : "Not available"}
              </TableCell>
              <TableCell>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => dealFavCountry(countryItem)}
                  >
                    {!favCountries.includes(countryItem) ? (
                      <FavoriteIcon />
                    ) : (
                      <div>
                        <FavoriteIcon sx={{ color: red[700] }} />
                       

                        {/* <Alert severity="success">
                          {countryItem.name.common} is added to the favorite
                          list!
                        </Alert> */}
                      </div>
                    )}
                  </IconButton>
                </CardActions>
              </TableCell>
              <TableCell>
                <Link to={`/country/countrydetails/${countryItem.name.common}`}>
                  <KeyboardArrowRightIcon />
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
}
