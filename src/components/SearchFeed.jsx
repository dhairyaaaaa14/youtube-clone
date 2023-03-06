import React, { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";

import Videos from "./Videos";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../features/video/videoSlice";
import VideoDetail from "./VideoDetail";

const SearchFeed = () => {
  const dispatch = useDispatch();
  const {searchTerm} =  useParams();
  console.log(searchTerm);

  useEffect(() => {
    dispatch(fetchFromAPI(`search?part=snippet&q=${searchTerm}`));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:<span style={{color:"orange"}}> {searchTerm}</span><span style={{ color: "#F31503" }}> Videos</span>
      </Typography>

      <Videos video = {searchTerm}/>
    </Box>
  );
};

export default SearchFeed;
