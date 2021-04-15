import React from "react";
import Todo from "./pages/Todo";
import About from "./pages/About";
import Contact from "./pages/Contact";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Todo />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
];

export default routes;
