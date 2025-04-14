import { createSlice } from "@reduxjs/toolkit";



const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers:{
        cacheResults : (state, action) => {
           state = Object.assign(state, action.payload); // Merge the new state with the old state
        }
    }
});

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;