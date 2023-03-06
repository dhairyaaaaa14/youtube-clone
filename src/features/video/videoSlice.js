import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const initialState = {
  videos: {},
  channelDetails:{},
};



export const fetchFromAPI = createAsyncThunk(
  "videos/fetchFromAPI",
  async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    return data;
  }
);

export const fetchChannelDetails = createAsyncThunk(
  "videos/fetchChannelDetails",
  async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    return data;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducer: {},
  extraReducers: {
    [fetchFromAPI.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully");
      return { ...state, videos: payload };
    },
    [fetchChannelDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully");
      console.log(payload)
      return { ...state, channelDetails: payload.items[0] };
    },
  },
});

export const getAllVideos = (state) => state.videos.videos;
export default videoSlice.reducer;
export const getChannelDetails = (state) => state.videos.channelDetails;
