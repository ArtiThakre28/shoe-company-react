import { lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader.jsx"; // Assuming you have a Loader component

// Lazy-loaded components with artificial delay
const Home = lazy(() =>
  wait(500).then(() => import("./components/Home.jsx"))
);
const HowItWorks = lazy(() =>
  wait(500).then(() => import("./components/HowItWorks.jsx"))
);
const About = lazy(() =>
  wait(500).then(() => import("./components/About.jsx"))
);
const Testimonials = lazy(() =>
  wait(500).then(() => import("./components/Testimonials.jsx"))
);
const ContactUs = lazy(() =>
  wait(500).then(() => import("./components/ContactUs.jsx"))
);

// Helper function to simulate delay
const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 page not found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/howitworks",
        element: <HowItWorks />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
