import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AllLoan from "../pages/AllLoan/AllLoan";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import LoanDetails from "../pages/LoanDetails/LoanDetails";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import AddLoan from "../pages/Dashboard/Manager/AddLoan";
import ManageLoans from "../pages/Dashboard/Manager/ManageLoans";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import MyLoans from "../pages/Dashboard/Borrower/MyLoans";
import AllLoans from "../pages/Dashboard/Admin/AllLoans";
import LoanApplications from "../pages/Dashboard/Admin/LoanApplications";
import PrivateRoute from "./PrivateRoute";
import PendingApplications from "../pages/Dashboard/Manager/PendingApplications";
import ApprovedApplication from "../pages/Dashboard/Manager/ApprovedApplication";
import Statistics from "../components/Dashboard/Statistics/Statistics";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contract from "../pages/Contact/Contact";
import LoanApplicationForm from "../components/Form/LoanApplicationForm";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-loans",
        element: <AllLoan></AllLoan>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contract></Contract>,
      },
      {
        path: "/loan/:id",
        element: (
          <PrivateRoute>
            <LoanDetails></LoanDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/loan-application-form",
        element: (
          <PrivateRoute>
            <LoanApplicationForm></LoanApplicationForm>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "add-loan",
        element: (
          <PrivateRoute>
            <AddLoan />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-loan",
        element: (
          <PrivateRoute>
            <ManageLoans />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/all-loan",
        element: (
          <PrivateRoute>
            <AllLoans />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/loan-applications",
        element: (
          <PrivateRoute>
            <LoanApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-loans",
        element: (
          <PrivateRoute>
            <MyLoans />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/approved-loans",
        element: (
          <PrivateRoute>
            <ApprovedApplication />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/pending-loans",
        element: (
          <PrivateRoute>
            <PendingApplications />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
