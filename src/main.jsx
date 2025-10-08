import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root.jsx";
import Mobiles from "./components/mobiles/Mobiles.jsx";
import Laptops from "./components/laptops/Laptops.jsx";
import Home from "./components/home/Home.jsx";
import Users from "./components/users/Users.jsx";
import Users2 from "./components/users2/Users2.jsx";

const userPromis = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Loading .... </span>}>
            <Users2 userPromis={userPromis}></Users2>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "about",
    element: <div>About React Router</div>,
  },
  {
    path: "blogs",
    element: <div>All about React Router</div>,
  },
  {
    path: "app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
