// u20780193 - Deliverable 1

import React from "react";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Songs from "./pages/Songs";
import Profile from "./pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
    path: "/",
    element: <Home />
},
{
    path: "/splash",
    element: <Splash />
},
{
    path: "/playlist/:id",
    element: <Playlist />
},
{
    path: "/songs",
    element: <Songs />
},
{
    path: "/profile",
    element: <Profile />
}
]);

class App extends React.Component{
    render(){
        return(
            <RouterProvider router={router}>
            </RouterProvider>
        );
    }
}

export default App;