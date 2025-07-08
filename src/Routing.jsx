import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage1 from "./HomePage1/HomePage1"; 
import HomePage2 from "./HomePage2/HomePage2";
import HomePage3 from "./HomePage3/HomePage3";
import HomePage4 from "./HomePage4/HomePage4";
import HomePage5 from "./HomePage5/HomePage5";
import HomePage6 from "./HomePage6/HomePage6";


const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  
    children: [
      {
        index: true,           
        element: <HomePage1 />,
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
      
    ],
  },
]);

export default routing;