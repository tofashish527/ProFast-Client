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
import PrivateRoute from "./Context/PrivateRoute";
import AddParcel from "./Pages/AddParcel";
import DashboardLayout from "./Layout/DashboardLayout";
import MyParcels from "./Pages/Dashboard/MyParcels";
import Payment from "./Pages/Dashboard/Payment";
import PaymentHistory from "./Pages/Dashboard/PaymentHistory";
import TrackParcel from "./Pages/Dashboard/TrackParcel";
import BeARider from "./Pages/BeARider";
import PendingRiders from "./Pages/Dashboard/PendingRiders";
import ActiveRiders from "./Pages/Dashboard/ActiveRiders";

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
             loader: () => fetch('./serviceCenter.json')
        },
        {
            path:"/beArider",
            element:<PrivateRoute><BeARider></BeARider></PrivateRoute>,
            loader: () => fetch('./serviceCenter.json')
        },
        {
            path:"/addparcel",
            element:<PrivateRoute><AddParcel></AddParcel></PrivateRoute>,
            loader: () => fetch('./serviceCenter.json')
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
  },
  {
     path :"/dashboard",
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:
    [
      {
        path:'myparcels',
        Component:MyParcels,
      },
       {
        path:'payment/:parcelId',
        Component:Payment,
      },
        {
        path: 'paymentHistory',
        Component: PaymentHistory
      },
      {
        path: 'pending-riders',
        Component:PendingRiders,
      },
      {
        path: 'active-riders',
        Component:ActiveRiders,
      },
      {
        path: 'track',
        Component:TrackParcel,
      }
    ]
  }
]);