

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

// All imports come FIRST (to satisfy ESLint's import/first rule)
import ProtectedRoute from "./auth/ProtectedRoute";
import HP1 from "./HomePage1/HP1";
import HomePage2 from "./HomePage2/HomePage2";
import HomePage3 from "./HomePage3/HomePage3";
import HomePage4 from "./HomePage4/HomePage4";
import HomePage5 from "./HomePage5/HomePage5";
import HomePage6 from "./HomePage6/HomePage6";
import HomePage7 from "./HomePage7/HomePage7";
import Popular3 from "./HomePage4/Popular3";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import About from "./About/About";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ItemDetails from "./pages/ItemDetails";

// ⏳ TEMPORARY delay to show the loader (remove in production)
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
      { index: true, element: <HP1 /> },
      { path: "home2", element: <HomePage2 /> },
      { path: "home3", element: <HomePage3 /> },
      { path: "home4", element: <HomePage4 /> },
      { path: "home5", element: <HomePage5 /> },
      { path: "home6", element: <HomePage6 /> },
      { path: "home7", element: <HomePage7 /> },
      { path: "popular", element: <Popular3 /> },
      { path: "shop", element: <ShopPage /> },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      { path: "about", element: <About /> },
      { path: "product/:id", element: <ItemDetails /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default routing;
