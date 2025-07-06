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
import Coverage from "./Pages/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    errorElement:<Error/>,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:"/coverage",
            Component:Coverage,
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