// Import necessary modules and functions from Redux toolkit and other libraries
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./appSlice";

// Configuration for Redux persist to store state in local storage
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer using the configuration and the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer
const store = configureStore({
  reducer: {
    // Specify the app reducer to handle the app state
    app: persistedReducer,
  },
});

// Export the configured store for use in the application
export default store;
