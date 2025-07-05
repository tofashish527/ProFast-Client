import {
  createBrowserRouter
} from "react-router";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import Error from "./Shared/Error";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Component/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    errorElement:<Error/>,
    children:[
        {
            path:"/",
            index:true,
            Component:Home,
            
        },
        {
            path:"/",
            Component:Home,
        }
    ]
  },
  {
    path :"/",
    Component:AuthLayout,
    children:
    [
        {
            path:'login',
            Component:Login,
        }
    ]
  }
]);