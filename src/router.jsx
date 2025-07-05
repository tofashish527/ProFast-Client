import {
  createBrowserRouter
} from "react-router";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import Error from "./Shared/Error";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPass from "./Pages/ForgotPass";
import ResetPass from "./Pages/ResetPass";
import EnCode from "./Pages/EnCode";

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
        },
        {
            path:'register',
            Component:Register,
        },
         {
            path:'Fpass',
            Component:ForgotPass,
        },
         {
            path:'encode',
            Component:EnCode,
        },
         {
            path:'Rpass',
            Component:ResetPass,
        }
    ]
  }
]);