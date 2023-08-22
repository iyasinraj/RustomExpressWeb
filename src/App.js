import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
