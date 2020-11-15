import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';


export const appSlice = createSlice({
  name: 'app',
  initialState: {
    image: null
  },
  reducers: {
    setImage: (state,action) => {

      state.app = action.payload;
    
    },


  },
});

export const {setImage } = appSlice.actions;

// export const selectProductTitle= state => state.app.channelId;
// export const selectDiscription = state => state.app.channelName;
export const useImage = (state) => state.app.app;

export default appSlice.reducer;
