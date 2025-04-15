import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Homes from "./Home/Homes.jsx";
import About from "./Home/About.jsx";
import Portfolio from "./Home/Portfolio.jsx";
import Contacts from "./Home/Contacts.jsx";
import Services from "./Home/Services.jsx";
import UserDetails from "./Home/Children/UserDetails.jsx";
import Post from "./Home/Children/Post.jsx";
import PostDetails from "./Home/Children/PostDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Homes },
      {
        path: "about",
        loader: () =>
          fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => data),
        Component: About,
      },
      {
        path: "services",
        loader: () =>
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => data),
        Component: Services,
      },
      {
        path: "services/:servicesId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.servicesId}`),
        Component: PostDetails,
      },
      { path: "portfolio", Component: Portfolio },
      { path: "contact", Component: Contacts },
      {
        path: "about/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: '*',
        element: <h1>Not Found</h1>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
