import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFromAPI,
  getAllVideos,
  fetchChannelDetails,
  getChannelDetails,
} from "../features/video/videoSlice";

const ChannelDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const channelDetails = useSelector(getChannelDetails);
  console.log(channelDetails)
  const videoDetails = useSelector(getAllVideos);
  console.log(videoDetails)

  console.log("Responseeeee: " + channelDetails, videoDetails);
  useEffect(() => {
    dispatch(fetchChannelDetails(`channels?part=snippet&id=${id}`));

    dispatch(fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,117,121,1) 97%)',

              zIndex:10,
              height:'300px'
          }} />
          <ChannelCard channelDetail={channelDetails} marginTop='-110px' />

         

          <Box display="flex" p="2">
            <Box sx={{mr:{sm:'100px'}}} />
          <Videos />
           

          
          </Box>
      
      </Box>
    </Box>
  );
};

export default ChannelDetail;
