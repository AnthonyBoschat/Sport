import { createSlice } from '@reduxjs/toolkit';

export const RouteSlice = createSlice({
  name: 'RouteSlice',
  initialState: {
    current:null
  },
  reducers: {
    changeRoute:(state,action) => {
        if(state.current === action.payload){
          state.current = null
        }else{
          state.current = action.payload
        }
    }
  },
});

export const { 
    changeRoute
} = RouteSlice.actions;

export const RouteSliceReducer = RouteSlice.reducer;