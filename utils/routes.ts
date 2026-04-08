import type { Link } from "~/types/types";
export const routes: Link[] = [
  {
    state: "normal",
    name: "Home",
    path: "/",
  },
  {
    state: "subnavLink",
    name: "Explore",
    subItems: [
      {
        name: "Gallery",
        path: "/gallery",
      },
      {
        name: "Services",
        path: "/services",
      },
    ],
  },
  {
    state: "subnavLink",
    name: "Other",
    subItems: [
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Media Center",
        path: "/media-center",
      },
      {
        name: "Blog",
        path: "/blog",
      },
    ],
  },
  {
    state: "button",
    name: "Contact",
    path: "/#contact",
  },
];
