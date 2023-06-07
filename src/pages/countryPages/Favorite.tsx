import React from "react";

import {
  Box,
  IconButton,
  Paper,
  Typography,
  dividerClasses,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { CountryListType } from "../../types/types";
import background from "../../assets/world.jpg";

type Prop = {
  favCountries: CountryListType[];
  setFavCountries: React.Dispatch<React.SetStateAction<CountryListType[]>>;
};

export default function Favorite({ favCountries, setFavCountries }: Prop) {
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
  return (
    <Paper
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

      {favCountries.length > 0 ? (
        favCountries.map((favItem) => {
          return (
            <Box
              key={favItem.name.common}
              sx={{ display: "flex", justifyContent: "center", gap: "1rem", }}
            >
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
              <Typography variant="h3" component="h1">
               Show Description here
              </Typography>
              <IconButton onClick={() => dealFavCountry(favItem)}>
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Box>
          );
        })
      ) : (
        <Typography sx={{ textAlign: "center", fontWeight: 800, color: "red" }}>
          No country has been added to favorite.
        </Typography>
      )}
    </Paper>
  );
}
