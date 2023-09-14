import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Settings from "../pages/Dashboard/AdsPageLayoutComponents/Settings";
import SavedItems from "../pages/Dashboard/AdsPageLayoutComponents/SavedItems";
import AdsPageLayout from "../layouts/AdsPageLayout";
import AdsPage from "../pages/AdsPage.js/AdsPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminHome from "../pages/Admin/AdminHome/AdminHome";
import AdsDetails from "../pages/AdsPage.js/AdDetails";
import ChatPageLayout from "../layouts/ChatPageLayout";
import PrivateRoute from "./PrivateRoute";
import Chat from "../pages/Chat/Chat";
import Terms from "../pages/Legal/Terms";
import Privacy from "../pages/Legal/Privacy";
import Cookies from "../pages/Legal/Cookies";
import Contact from "../pages/Company/Contact";
import About from "../pages/Company/About";
import Jobs from "../pages/Company/Jobs";
import Blog from "../pages/Company/Blog";

const url = 'https://saepciure.rustomexpress.com'
// const url = "http://192.168.0.105:5000"
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
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/privacy',
                element: <Privacy></Privacy>
            },
            {
                path: '/cookie',
                element: <Cookies></Cookies>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career/jobs',
                element: <Jobs></Jobs>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/ads/:id',
                loader: async ({ params }) => {
                    return fetch(`${url}/ad/${params.id}`)
                },
                element: <AdsDetails></AdsDetails>
            },
            {
                path: '/chat',
                element: <PrivateRoute><ChatPageLayout></ChatPageLayout></PrivateRoute>,
                children: [
                    {
                        path: '/chat/:id',
                        element: <PrivateRoute><Chat></Chat></PrivateRoute>
                    }
                ]
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/settings',
                element: <PrivateRoute><Settings></Settings></PrivateRoute>
            },
            {
                path: '/dashboard/saveditems',
                element: <PrivateRoute><SavedItems></SavedItems></PrivateRoute>
            },
        ]
    },
    {
        path: '/ads',
        element: <AdsPageLayout></AdsPageLayout>,
        children: [
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