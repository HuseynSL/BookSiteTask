import ClientRoot from "../pages/Client/ClientRoot";
import Home from "../pages/Client/Home";
import Books from "../pages/Client/Books";
import BookDetail from "../pages/Client/BookDetail";
import Favorites from "../pages/Client/Favorites";
import Basket from "../pages/Client/Basket";
import ErrorPage from "../pages/Client/ErrorPage";


// ADMIN ROUTE

import AdminRoot from "../pages/Admin/AdminRoot";
import DashBoard from "../pages/Admin/Dashboard";
import AddBook from "../pages/Admin/AddBook";
import EditBook from "../pages/Admin/EditBook";
import AdminBooks from "../pages/Admin/AdminBooks";



const Routers = [
    {
        path:"",
        element: <ClientRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/books",
                element:<Books/>
            },
            {
                path:"/books/:id",
                element:<BookDetail/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },
            {
                path:"*",
                element:<ErrorPage/>
            }
        ]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"",
                element:<DashBoard/>
            },
            {
                path:"addbook",
                element:<AddBook/>
            },
            {
                path:"books",
                element:<AdminBooks/>
            },
            {
                path:"edit",
                element:<EditBook/>
            },
        ]
    }
]

export default Routers