import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { Box, CircularProgress } from "@mui/material";

import { CountryListType } from "../../types/types";
import background from "../../assets/world.jpg";


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function CountryDetails() {

  const { name } = useParams<{ name: string }>();
  const countryDetailURL = `https://restcountries.com/v3.1/name/${name}?fullText=true`;

  const [country, setCountry] = useState<CountryListType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    fetch(countryDetailURL)
      .then((response) => response.json())
       .then((result) => {
        setIsLoading(false);
        setCountry(result);
      })
      .catch((error) => console.log(error));
  }, [countryDetailURL]);
  
  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else
  return (
    <div>
      {country.map((countryItem) => {
        return (
        <Box  key={countryItem.name.common}  sx={{ margin: 15, marginTop: 5, backgroundImage:`url(${background})` }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {countryItem.name.common[0]}
                  </Avatar>
                }
                title={countryItem.name.common}
              />
              <CardMedia
                component="img"
                height="194"
                image={countryItem.flags.svg}
                alt={countryItem.name.common}
              />

              <CardActions disableSpacing>
                <a
                  href={countryItem.maps.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <IconButton>
                    <AddLocationIcon />
                  </IconButton>
                </a>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    This country belongs to {countryItem.continents} and located
                    at the {countryItem.latlng[0]} °N and{" "}
                    {countryItem.latlng[1]}
                    °W, this country has population of {
                      countryItem.population
                    }{" "}
                    and it has{" "}
                    {countryItem.independent ? "gained" : "not gained"} the
                    independent, according to CIA World Factbook.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Box>
        );
      })}
    </div>
  );
}
