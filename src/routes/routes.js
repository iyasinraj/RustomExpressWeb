import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Settings from "../Dashboard/AdsPageLayoutComponents/Settings";
import SavedItems from "../Dashboard/AdsPageLayoutComponents/SavedItems";
import AdsPageLayout from "../layouts/AdsPageLayout";
import AdsPage from "../components/AdsPage.js/AdsPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminHome from "../components/Admin/AdminHome/AdminHome";
import AdsDetails from "../components/AdsPage.js/AdDetails";
import ChatPageLayout from "../layouts/ChatPageLayout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/ads/:params',
                element: <AdsDetails></AdsDetails>
            },
            {
                path: '/chat',
                element:<ChatPageLayout></ChatPageLayout>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path:'/dashboard/settings',
                element:<Settings></Settings>
            },
            {
                path:'/dashboard/saveditems',
                element:<SavedItems></SavedItems>
            },
        ]
    },
    {
        path: '/ads',
        element: <AdsPageLayout></AdsPageLayout>,
        children:[
            {
                path: '/ads',
                element: <AdsPage></AdsPage>
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: 'admin',
                element: <AdminHome></AdminHome>
            }
        ]
    }

])