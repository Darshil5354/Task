import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import PostReducer from "./slices/feature/postSlice";


const reducer = {
  auth: authReducer,
  message: messageReducer,
  app: PostReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
