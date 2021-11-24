import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import { useParams } from "react-router";
export default function Filters() {
  const { id }: any = useParams();
  return <Box sx={{ my: 2 }}>Nested nav:  {id}</Box>;
}
