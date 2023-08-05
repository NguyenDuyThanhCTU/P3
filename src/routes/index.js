import Admin from "../components/Admin/Admin";
import Home from "../components/Client/Home/Home";
import Introduction from "../components/Client/Introduction/Introduction";
import Order from "../components/Client/Order/Order";
import Login from "../components/Login/Login";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";

import ClientLayout from "../Layout/ClientLayout/ClientLayout";

export const AllRoutes = [
  {
    path: "/login",
    component: Login,
    Layout: AdminLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: AdminLayout,
  },
  {
    path: "/",
    component: Home,
    Layout: ClientLayout,
  },
  {
    path: "/thue-xe",
    component: Order,
    Layout: ClientLayout,
  },
  {
    path: "/gioi-thieu",
    component: Introduction,
    Layout: ClientLayout,
  },
];
