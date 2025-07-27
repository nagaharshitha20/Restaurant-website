

// import { createBrowserRouter } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import Loader from "./Loader"; // Adjust the path if needed



// const Layout = lazy(() => import("./Layout"));
// const ProtectedRoute = lazy(() => import("./auth/ProtectedRoute"));
// const HP1 = lazy(() => import("./HomePage1/HP1"));
// const HomePage2 = lazy(() => import("./HomePage2/HomePage2"));
// const HomePage3 = lazy(() => import("./HomePage3/HomePage3"));
// const HomePage4 = lazy(() => import("./HomePage4/HomePage4"));
// const HomePage5 = lazy(() => import("./HomePage5/HomePage5"));
// const HomePage6 = lazy(() => import("./HomePage6/HomePage6"));
// const HomePage7 = lazy(() => import("./HomePage7/HomePage7"));
// const Popular3 = lazy(() => import("./HomePage4/Popular3"));
// const ShopPage = lazy(() => import("./pages/ShopPage"));
// const CartPage = lazy(() => import("./pages/CartPage"));
// const About = lazy(() => import("./About/About"));
// const Login = lazy(() => import("./auth/Login"));
// const Register = lazy(() => import("./auth/Register"));
// const ItemDetails = lazy(() => import("./pages/ItemDetails"));

// const routing = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Suspense fallback={<Loader />}>
//         <Layout />
//       </Suspense>
//     ),
//     children: [
//       { index: true, element: <HP1 /> },
//       { path: "home2", element: <HomePage2 /> },
//       { path: "home3", element: <HomePage3 /> },
//       { path: "home4", element: <HomePage4 /> },
//       { path: "home5", element: <HomePage5 /> },
//       { path: "home6", element: <HomePage6 /> },
//       { path: "home7", element: <HomePage7 /> },
//       { path: "popular", element: <Popular3 /> },
//       { path: "shop", element: <ShopPage /> },
//       {
//         path: "cart",
//         element: (
//           <ProtectedRoute>
//             <CartPage />
//           </ProtectedRoute>
//         ),
//       },
//       { path: "about", element: <About /> },
//       { path: "product/:id", element: <ItemDetails /> },
//       { path: "login", element: <Login /> },
//       { path: "register", element: <Register /> },
//     ],
//   },
// ]);

// export default routing;


import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./Loader";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import Mypages from "./components/Mypages/Mypages";
import Contact from "./components/Contact/Contact";
import ProtectedRoute from "./auth/ProtectedRoute";
import Home from "./components/Home/Home";
import Popular3 from "./components/Shop/Popular3";
import ShopPage from './pages/ShopPage';
import ItemDetails from './pages/ItemDetails';
import Login from './auth/Login';
import Register from './auth/Register';
import About1 from "./components/About/About1";
import ProductSection from "./components/Shop/ProductSection";
import Products from "./components/Shop/Products";
import FastFood from "./components/Home/FastFood";
import RecentNews2 from "./Common/RecentNews2";
import Menu from "./components/About/Menu";
import CartPage from './pages/CartPage';
const Layout = React.lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./Layout")), 1000)
  )
);

const routing = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "popular", element: <Popular3 /> },
      { path: "shop", element: <ShopPage /> },
      { path: "home", element: <Home /> },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      { path: "about", element: <About /> },
      { path: "myshop", element: <Shop /> },
      { path: "blog", element: <Blog /> },
      { path: "mypages", element: <Mypages/> },
      { path: "contact", element: <Contact /> },

      { path: "product/:id", element: <ItemDetails /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "about1", element: <About1 /> },
      { path: "productsection", element: <ProductSection/> },
      { path: "products", element: <Products/> },
      { path: "fastfood", element: <FastFood/> },
      ,
      { path: "enquire", element: <RecentNews2/> },
      { path: "menu", element: <Menu/> },
      
    ],
  },
]);

export default routing;
