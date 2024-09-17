import Homepage from '@pages/Homepage';

import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
