import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import  test  from "../images/test.gif"
import SearchBar from "./SearchBar";
import {logo} from "../utils/constants"

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: "0",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{display:'flex',alignItems:'center'}}>
      <img src={test} alt="logo" height={80}  p={0} className="logo"/>
    </Link>

    <div className="logo-hide">

    </div>

    <SearchBar />
  </Stack>
);

export default Navbar;
