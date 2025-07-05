import {
  createBrowserRouter
} from "react-router";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import Error from "./Shared/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            path:"/",
            index:true,
            Component:Home,
            errorElement:Error,
        },
        {
            path:"/",
            Component:Home,
        }
    ]
  },
]);