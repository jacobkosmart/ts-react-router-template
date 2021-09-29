import IRoute from "interface/route";
import { About, Home, NotFound } from "pages/pageIndex";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    exact: true,
  },
  {
    path: "/about/",
    name: "About",
    component: About,
    exact: true,
  },
  {
    path: "/about/:number",
    name: "About:id",
    component: About,
    exact: true,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    exact: false,
  },
];

export default routes;
