import React from "react";

import { TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function TableHeading() {
   return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography variant="h5" sx={{ fontWeight: 800 }} component="h1">
            Flag 
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h5" sx={{ fontWeight: 800 }} component="h1">
            Name
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h5" sx={{ fontWeight: 800 }} component="h1">
            Region
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h5" sx={{ fontWeight: 800 }} component="h1">
            Population
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h5" sx={{ fontWeight: 800 }} component="h1">
            Languages
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
