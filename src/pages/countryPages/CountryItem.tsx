import React, { useState } from "react";

import { Paper, Table, TableContainer, TablePagination } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

import TableHeading from "../../components/countryTableComponents/TableHeading";
import TablesBody from "../../components/countryTableComponents/TablesBody";
import { CountryListType } from "../../types/types";

type Prop = {
  favCountries: CountryListType[];
  setFavCountries: React.Dispatch<CountryListType[]>;
  filteredCountryList: CountryListType[];
};
export default function CountryItem({
  favCountries,
  setFavCountries,
  filteredCountryList,
}: Prop) {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

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
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHeading />
          <TablesBody
            filteredCountryList={filteredCountryList}
            page={page}
            rowsPerPage={rowsPerPage}
            setFavCountries={setFavCountries}
            favCountries={favCountries}
            dealFavCountry={dealFavCountry}
          />
        </Table>
      </TableContainer>
      <TablePagination
        ActionsComponent={TablePaginationActions}
        rowsPerPage={rowsPerPage}
        page={page}
        count={filteredCountryList.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        component="div"
      />
    </Paper>
  );
}
