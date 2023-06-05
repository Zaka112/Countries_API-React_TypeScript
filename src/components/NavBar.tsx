import React from "react";

import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material/";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import { CountryListType } from "../types/types";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Prop = {
  favCountries: CountryListType[];
};
export default function NavBar({ favCountries }: Prop) {
  let favCount;
  favCount = favCountries.length;
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            MUI
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <IconButton
                size="large"
                aria-label="all countries"
                color="inherit"
              >
                <HomeIcon />
              </IconButton>
            </Link>

            <Link
              to="/country/countries"
              style={{ textDecoration: "none", color: "white" }}
            >
              <IconButton
                size="large"
                aria-label="all countries"
                color="inherit"
              >
                <PublicIcon />
              </IconButton>
            </Link>

            <Link
              to="/favorite"
              style={{ textDecoration: "none", color: "white" }}
            >
              <IconButton
                size="large"
                aria-label={`show ${favCount} new notifications`}
                color="inherit"
              >
                <Badge badgeContent={favCount} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

{
  /* <Box sx={{display:'flex', justifyContent:'space-between'}}>
    <Link to="/">
      
     
    </Link>
    <Link to="/">
      <div><HomeIcon/></div>
    </Link>
    <Link to="/country/countries">
      <div><PublicIcon/></div>
    </Link>
    <Link to="/favorite">
      <Badge badgeContent={favCount} color="primary">
        <div>FAVORITE</div>
      </Badge>
    </Link>
    <Link to="/contact">
      <div>CONTACT</div>
    </Link></Box> */
}
