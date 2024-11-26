// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { BasketProvider } from "./context/BasketContext";
import { ReservationProvider } from "./context/ReservationContext";
/* ************************************************************************* */
import About from "./pages/about/About";
import BackOffice from "./pages/backOffice/BackOffice";
import DevisPages from "./pages/devis/DevisPages";
import Legals from "./pages/legals/Legals";
/* ************************************************************************* */
// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />, // Renders the App component for the home page
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/backoffice",
    element: <BackOffice />, // Add the BackOffice route
  },
  {
    path: "/devis",
    element: <DevisPages />, // Utiliser DevisPages pour la route Devis
  },
  {
    path: "/legals",
    element: <Legals />,
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <BasketProvider>
      <ReservationProvider>
        <RouterProvider router={router} />
      </ReservationProvider>
    </BasketProvider>
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
