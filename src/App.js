import * as React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Restaurant from "./restaurant/Restaurant";

const App = () => {
  const routes = useRoutes([
    {
      path: "*",
      element: <Home />,
     
    },
    {
      path: "/",
      element: <Home />,
      errorElement:"Sorry There Is Error"
    },

    {
      path: "/restaurant",
      element: <Restaurant />,
    },

    // {
    //   path: 'games',
    //   element: <Games />,
    //   children: [
    //   {
    //     path: '',
    //     element: <div>Games Index</div>
    //   },
    //   {
    //     path: ':id',
    //     element: <div>Game Details</div>
    //   }]
    // }
  ]);
  return routes;
};

export default App;
