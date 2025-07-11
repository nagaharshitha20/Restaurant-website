import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

import HP1 from "./HomePage1/HP1";
import HomePage2 from "./HomePage2/HomePage2";
import HomePage3 from "./HomePage3/HomePage3";
import HomePage4 from "./HomePage4/HomePage4";
import HomePage5 from "./HomePage5/HomePage5";
import HomePage6 from "./HomePage6/HomePage6";
import HomePage7 from "./HomePage7/HomePage7";
import Popular3 from "./HomePage4/Popular3";
import ShopPage from "./pages/ShopPage";
import CartPage from './pages/CartPage';



const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  
    children: [
      {
        index: true,           
        element: <HP1/>,
      },
      {
        path: "home2",
        element: <HomePage2 />,
      },
      {
        path: "home3",
        element: <HomePage3 />,
      },
      {
        path: "home4",
        element: <HomePage4 />,
      },
      {
        path: "home5",
        element: <HomePage5 />,
      },
      {
        path: "home6",
        element: <HomePage6 />,
      },
      {
        path: "home7",
        element: <HomePage7 />,
      },
      {
        path: "popular",
        element: <Popular3/>,
      },
      {
        path: "shop",
        element: <ShopPage/>,
      },
      {
        path: "cart",
        element: <CartPage/>,
      },
      
    ],
  },
]);

export default routing;