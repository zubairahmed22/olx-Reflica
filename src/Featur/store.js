
import { configureStore  } from '@reduxjs/toolkit';
import reducer from '../Featur/userSlice';
import appReducer from '../Featur/appSlice';


export default configureStore({
  reducer: {
    user: reducer,
    app: appReducer,
  
  },
  
});
