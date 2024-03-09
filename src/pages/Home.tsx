import React from "react";

import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import background from "../assets/world.jpg";
import { CountryListType } from "../types/types";
type Prop = {
  countries: CountryListType[];

  // isLoading: boolean;
};
export default function Home({ countries }: Prop) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Paper
      elevation={5}
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        alignContent: "center",
      }}
    >
      <h2>Country Flags</h2>
      <Link to="/country/countries">
        {" "}
        <Slider {...settings}>
          {countries.map((country, index) => (
            <div key={index}>
              <img src={country.flags.svg} alt={country.name.common} />
              <p>{country.name.common}</p>
            </div>
          ))}
        </Slider>
      </Link>
    </Paper>
  );
}
