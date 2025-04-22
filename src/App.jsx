import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import First from "../pages/First"
import Write from '../pages/Write';
import Preview from '../pages/Preview';
import { MarkDownProvider } from '../contex/MarkDownContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <First />,
    children: [
      {
        path: '/write',
        element: <Write />,
      },
      {
        path: '/preview',
        element: <Preview />,
      },
    ],
  },
]);

function App() {
  return (
    <MarkDownProvider>
      <RouterProvider router={router} />
    </MarkDownProvider>
  );
}

export default App;
