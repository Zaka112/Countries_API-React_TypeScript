import React from "react";

import { TextField } from "@mui/material";

type Prop = {
   setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export default function Search({  setSearch }: Prop) {
  const findCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <form action="">
        <TextField
          id="standard-basic"
          label="Search Country by Name"
          variant="standard"
          helperText="suggestion: Denmark, Sweden, Finland"
          onChange={findCountry}
        />
      </form>
    </div>
  );
}
