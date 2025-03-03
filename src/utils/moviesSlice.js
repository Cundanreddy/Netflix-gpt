import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState:{
        nowPlayingMovies:null,
        upcomingMovies:null,
        topRatedMovies:null,
        popularMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addUpcomingMoviesMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrailerVideo:(state,action) =>{
            state.trailerVideo=action.payload;
        }
    }

})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMoviesMovies} = moviesSlice.actions;
export default moviesSlice.reducer;