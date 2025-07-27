import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routing from "./Routing";

const MainApp = () => {
  return (
    <div data-testid="main">
      <RouterProvider router={routing} />
    </div>
  );
};

export default MainApp;
