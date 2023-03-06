import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { useSelector } from "react-redux";
import { getAllVideos } from "../features/video/videoSlice";

const Videos = ({direction}) => {
  const videoList = useSelector(getAllVideos);
  console.log(videoList);

  return (
    videoList.items != null && (
      <Stack direction={direction || "row" } flexWrap="wrap" justifyContent="start" gap={2}>
        {videoList.items.map((item, index) => {
          return (
            <Box key={index}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          );
        })}
      </Stack>
    )
  );
};

export default Videos;
