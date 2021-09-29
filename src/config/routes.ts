import IRoute from "../interface/route";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

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
