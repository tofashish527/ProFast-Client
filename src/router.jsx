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
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import Forbidden from "./Pages/Dashboard/Forbidden";
import AdminRoute from "./Context/AdminRoute";
import AssignRider from "./Pages/Dashboard/AssignRider";
import PendingDeliveries from "./Pages/Dashboard/PendingDeliveries";
import RiderRoute from "./Context/RiderRoute";
import CompletedDeliveries from "./Pages/Dashboard/CompletedDeliveries";
import MyEarnings from "./Pages/Dashboard/MyEarnings";

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
        path: 'forbidden',
        Component: Forbidden,
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
        path: 'assign-rider',
        element: <AdminRoute><AssignRider></AssignRider></AdminRoute>
      },
          {
        path: 'pending-riders',
        element: <AdminRoute><PendingRiders></PendingRiders></AdminRoute>
      },
      {
        path: 'active-riders',
        element: <AdminRoute><ActiveRiders></ActiveRiders></AdminRoute>
      },
      {
        path: 'makeAdmin',
        element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
      },
      {
        path: 'track',
        Component:TrackParcel,
      },
       {
        path: 'pending-deliveries',
        element: <RiderRoute><PendingDeliveries></PendingDeliveries></RiderRoute>
      },
         {
        path: 'completed-deliveries',
        element: <RiderRoute>
          <CompletedDeliveries></CompletedDeliveries>
        </RiderRoute>
      },
      {
        path: 'my-earnings',
        element:<RiderRoute><MyEarnings></MyEarnings></RiderRoute>
      },
    ]
  }
]);