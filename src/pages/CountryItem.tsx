import React, { useState } from "react";

import { CountryListType } from "../types/types";
import { Typography, TextField, IconButton, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

type Prop = {
  countries: CountryListType[];
  favCountries: CountryListType[];
  setFavCountries: React.Dispatch<CountryListType[]>;
  // isLoading:boolean
};
export default function CountryItem({
  countries,
  favCountries,
  setFavCountries,
}: Prop) {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const findCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  function dealFavCountry(newItem: CountryListType) {
    if (favCountries.includes(newItem)) {
      const result = favCountries.filter(
        (item) => item.name.common !== newItem.name.common
      );
      setFavCountries(result);
    } else {
      setFavCountries([...favCountries, newItem]);
    }
  }
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };
  const filteredCountryList = countries.filter((country) => {
    return !search
      ? countries
      : country.name.common.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div /*key={uuidv4}*/>
      <form action="">
        <TextField
          id="standard-basic"
          label="Search by Country Name"
          variant="standard"
          onChange={findCountry}
        />
      </form>
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800 }}
                    component="h1"
                  >
                    Flag
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800 }}
                    component="h1"
                  >
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800 }}
                    component="h1"
                  >
                    Region
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800 }}
                    component="h1"
                  >
                    Population
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800 }}
                    component="h1"
                  >
                    Languages
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            {filteredCountryList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((countryItem) => {
                return (
                  <TableBody>
                    <TableRow>
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
                        {countryItem.languages ? (
                          <p>
                            {" "}
                            {Object.values(countryItem.languages).join(
                              "*"
                            )}{" "}
                          </p>
                        ) : (
                          "Not available"
                        )}
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
                                <FavoriteIcon sx={{ color: red[700] }} />{" "}
                              </div>
                            )}
                          </IconButton>
                        </CardActions>
                      </TableCell>
                      <TableCell>
                        <Link
                          to={`/country/countrydetails/${countryItem.name.common}`}
                        >
                          <KeyboardArrowRightIcon />
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}

            <TablePagination
              ActionsComponent={TablePaginationActions}
              rowsPerPage={rowsPerPage}
              page={page}
              count={filteredCountryList.length}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
