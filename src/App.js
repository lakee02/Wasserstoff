import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Products from "./components/Products";

// Create a browser router with specified routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Products />,
      }
    ],
  },
]);

// Main App component
function App() {
  return (
    <div>
      {/* Provide the router to the app */}
      <RouterProvider router={appRouter}>
        {/* Render the Body component */}
        <Body />
      </RouterProvider>
    </div>
  );
}

export default App;
