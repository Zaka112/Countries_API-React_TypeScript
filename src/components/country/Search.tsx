import React, { useState } from 'react'

import {CountryListType } from '../../types/types'
import { TextField } from "@mui/material";

type Prop = {
countries: CountryListType[]
//setSearch: React.Dispatch<CountryListType[]>
}
export default function Search({countries}:Prop) {
  
  const [search, setSearch]= useState<string>("")
  const findRecipe = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <form action="">
        <TextField
          id="standard-basic"
          label="Search Recipe"
          variant="standard"
          helperText="suggestion: Denmark, Sweden, Finland"
          onChange={findRecipe}
        />
      </form>
    </div>
  );
}
