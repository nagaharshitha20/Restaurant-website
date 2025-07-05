import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routing from "./Routing"

const MainApp = () => {
  return <RouterProvider router={routing} />;
};

export default MainApp;