import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart"

const routes = [
  {
    path: "/",
    element: <Layout />,
    // errorElement: 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ],
  },
];

export default routes;
