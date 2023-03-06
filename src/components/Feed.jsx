import React, { useState, useEffect } from "react";

import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchFromAPI } from "../features/video/videoSlice";



const Feed = () => {

  const dispatch = useDispatch();
  const[selectedCategory,setSelectedCategory] = useState('New')
 
  useEffect(() => {
    
    dispatch(fetchFromAPI(`search?part=snippet&q=${selectedCategory}`))
  
  
    


  }, [selectedCategory]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar 

          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright @ 2023 Dhairya
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
           {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        <Videos  />
      </Box>
    </Stack>
  );
};

export default Feed;
