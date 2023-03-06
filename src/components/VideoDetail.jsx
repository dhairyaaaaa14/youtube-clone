import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import Videos from "./Videos";
import {
  fetchChannelDetails,
  fetchFromAPI,
  getAllVideos,
  getChannelDetails,
} from "../features/video/videoSlice";
import { useSelector } from "react-redux";

const VideoDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchVideos = useSelector(getChannelDetails);
  console.log(fetchVideos);

  const relatedVideos = useSelector(getAllVideos);
  console.log(relatedVideos);

  useEffect(() => {
    dispatch(fetchChannelDetails(`videos?part=snippet,statistics&id=${id}`));
    dispatch(
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    );
  }, [id]);

  //if(!fetchVideos?.snippet) return "Loading...";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        {fetchVideos.snippet && (
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />

              <Typography color="#fff" variant="h6" fontWeight="bold" p={2}>
                {fetchVideos.snippet.title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                px={2}
              >
                <Link to={`/channel/${fetchVideos.snippet.channelId}`}>
                  <Typography color="#fff" variant="h6" fontWeight="bold" >
                    <Typography
                      variant={{ sm: "subtitle", md: "h6" }}
                      color="#fff"
                    >
                      {fetchVideos.snippet.channelTitle}
                      <CheckCircle
                        sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                      />
                    </Typography>
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(
                      fetchVideos.statistics.viewCount
                    ).toLocaleString()}{" "}
                    views
                  </Typography>

                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(
                      fetchVideos.statistics.likeCount
                    ).toLocaleString()}{" "}
                    Likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        )}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
