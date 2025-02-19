import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Trainer from "../Pages/AllTrainers/Trainer";
import TrainerDetails from "../Pages/AllTrainers/TrainerDetails";
import AllClasses from "../Pages/AllClasses/AllClasses";
import ForumDetails from "../Home/Body/Forums/ForumDetails";
import AllForums from "../Home/Body/Forums/AllForums";
import TrainerBooked from "../Pages/TrainerBooking/TrainerBooked";
import BookingPayment from "../Pages/TrainerBooking/BookingPayment";
import ErrorBoundary from "../../ErrorBoundary";
import PrivateRoute from "../../PrivateRoute";
import Dashboard from "../Dashboard/MainCompponents/Dashboard";
import UserProfile from "../Dashboard/MainCompponents/UserProfile";
import BeATrainerForm from "../Pages/AllTrainers/BeATrainerForm";
import Activity from "../Dashboard/MainCompponents/Activity";
import Membership from "../Home/Membership";
import NewsletterSubs from "../Dashboard/AdminComponents/NewsletterSubs";
import AllTrainerAd from "../Dashboard/AdminComponents/AllTrainerAd";
import AppliedTrainer from "../Dashboard/AdminComponents/AppliedTrainer";
import Balance from "../Dashboard/AdminComponents/Balance";
import AddClass from "../Dashboard/AdminComponents/AddClass";
import AddForums from "../Dashboard/AddForums";
import ManageSlot from "../Dashboard/TrainerComponents/ManageSlot";
import AddNewSlots from "../Dashboard/TrainerComponents/AddNewSlots";
import DashboardOverview from "../Dashboard/MainCompponents/Dashview";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
        path: '/register',
        element: <Register></Register>
        },
        {
        path: '/trainers',
        element: <Trainer></Trainer>
        },
        {
        path: '/allClasses',
        element: <AllClasses></AllClasses>
        },
        {
          path: '/allForums',
          element: <AllForums></AllForums>
        },
        {
          path: '/beTrainer',
          element: <PrivateRoute><BeATrainerForm></BeATrainerForm></PrivateRoute>
        },
        {
          path: '/membership',
          element: <PrivateRoute><Membership></Membership></PrivateRoute>
        },
        {
            path: "/trainer-details/:id",
            element:<TrainerDetails></TrainerDetails>,
            loader: ({params}) => fetch(`https://fit-verse-server-kappa.vercel.app/allTrainers/${params.id}`)
            
        },
        {
            path: "/forum-details/:id",
            element:<ForumDetails></ForumDetails>,
            loader: ({params}) => fetch(`https://fit-verse-server-kappa.vercel.app/allForums/${params.id}`)
            
        },
      ],
    },
    {
      path: "*",
      element: <ErrorBoundary></ErrorBoundary>
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // Users
        {
          path: 'profile',
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path: 'bookedTrainer',
          element: <PrivateRoute><TrainerBooked></TrainerBooked></PrivateRoute>
        },
        {
          path: 'activityhistory',
          element: <PrivateRoute><Activity></Activity></PrivateRoute>
        },
        {
          path: 'bookedTrainer/payment',
          element: <PrivateRoute><BookingPayment></BookingPayment></PrivateRoute>
        },
        {
          path: 'overview',
          element: <PrivateRoute><DashboardOverview></DashboardOverview></PrivateRoute>
        },
        // Admin
        {
          path: 'newslsub',
          element: <PrivateRoute><NewsletterSubs></NewsletterSubs></PrivateRoute>
        },
        {
          path: 'allTrainerAd',
          element: <PrivateRoute><AllTrainerAd></AllTrainerAd></PrivateRoute>
        },
        {
          path: 'applied',
          element: <PrivateRoute><AppliedTrainer></AppliedTrainer></PrivateRoute>
        },
        {
          path: 'balance',
          element: <PrivateRoute><Balance></Balance></PrivateRoute>
        },
        {
          path: 'addclass',
          element: <PrivateRoute><AddClass></AddClass></PrivateRoute>
        },
        {
          path: 'addforum',
          element: <PrivateRoute><AddForums></AddForums></PrivateRoute>
        },
        // trainer
        {
          path: 'manageslot',
          element: <PrivateRoute><ManageSlot></ManageSlot></PrivateRoute>
        },{
          path: 'addslot',
          element: <PrivateRoute><AddNewSlots></AddNewSlots></PrivateRoute>
        },
        
      ]
      
    },
    
  ]);