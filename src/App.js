import * as React from "react";
import { useRoutes } from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import Restaurant from "./restaurant/Restaurant";
import RestaurantDetails from "./restaurant/restaurantDetails/RestaurantDetails";


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

    {
      path: "/about",
      element: <About />,
    },


    {
      path: "/restaurant/:id",
      element: <RestaurantDetails />,
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
