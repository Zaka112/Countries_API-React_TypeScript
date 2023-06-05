import React from "react";

import { Box, Paper, Typography } from "@mui/material";

import { CountryListType } from "../../types/types";
import background from "../../assets/world.jpg"

type Prop = {
  favCountries: CountryListType[];
};

export default function Favorite({ favCountries }: Prop) {
  return (
    <div><Paper
    elevation={5}
    sx={{
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
     
      minHeight: 800,
      alignContent: "center",
    }}
  >
      <Typography
        variant="h2"
        component="h1"
        sx={{ textAlign: "center", fontWeight: 800 }}
      >
        Favorite Countries
      </Typography>
      {favCountries.map((favItem) => {
        return (
          <Box key={favItem.name.common} sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Typography variant="h3" component="h1">
              {favItem.name.common}
            </Typography>
            <Typography>
              <img
                src={favItem.flags.svg}
                alt={favItem.flags.alt}
                width={100}
              />
            </Typography>
          </Box>
        );
      })}</Paper>
    </div>
  );
}
