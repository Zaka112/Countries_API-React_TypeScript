import React from "react";

import { Paper } from "@mui/material";

import background from "../assets/world.jpg";

export default function Home() {
  return (
    <div>
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
      />
    </div>
  );
}
