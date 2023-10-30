import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Scrolling } from "./pages/Scrolling";
import { Basics } from "./pages/Basics";
import { RootLayout } from "./pages/RootLayout";
import { Variants } from "./pages/Variants";
import { Types } from "./pages/Types";
import { Transitions } from "./pages/Transitions";
import { Animations } from "./pages/Animations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Transitions />,
        handle: {
          title: "CSS Transitions",
        },
      },
      {
        path: "css-animations",
        element: <Animations />,
        handle: {
          title: "FM Basics",
        },
      },
      {
        path: "basics",
        element: <Basics />,
        handle: {
          title: "FM Basics",
        },
      },
      {
        path: "types",
        element: <Types />,
        handle: {
          title: "Types",
        },
      },
      {
        path: "variants",
        element: <Variants />,
        handle: {
          title: "Variants",
        },
      },
      {
        path: "scrolling",
        element: <Scrolling />,
        handle: {
          title: "Scrolling",
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
