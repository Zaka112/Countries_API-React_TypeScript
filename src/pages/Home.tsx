import React from "react";

import { Paper, Box } from "@mui/material";
import bg from "../assets/world.jpg";
export default function Home() {
  return (
    <div>
      <Paper
        elevation={5}
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop: 3,
          minHeight: 800,
          alignContent: "center",
        }}
      />
    </div>
  );
}
