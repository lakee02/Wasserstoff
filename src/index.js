// Import necessary modules and components from React and external libraries
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// Create a root for ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Create a Redux persistor for persisting state
let persistor = persistStore(store);

// Render the main application component wrapped in necessary providers
root.render(
  <React.StrictMode>
    {/* Redux Provider for state management */}
    <Provider store={store}>
      {/* Redux PersistGate for handling state persistence */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Main application component */}
        <App />
      </PersistGate>
      {/* Toast notification component */}
      <Toaster />
    </Provider>
  </React.StrictMode>
);
