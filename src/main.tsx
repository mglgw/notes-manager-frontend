import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@wangeditor/editor/dist/css/style.css' // import css
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/Pages/ErrorPage.tsx";
import ShowNotes from "./components/Pages/ShowNotes.tsx";
import MyAccount from "./components/Pages/MyAccount.jsx";
import Home from "./components/Pages/Home.tsx";
import Login from "./components/Pages/LoginPage.tsx";
import Register from "./components/Pages/Register.tsx";
import LogOutPage from "./components/Pages/LogOutPage.tsx";
import NotesProvider from "./store/NotesContext.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "Home",
                element: <Home/>,
            },
            {
                path: "MyNotes",
                element: <ShowNotes/>
            },
            {
                path: "Account",
                element: <MyAccount/>
            },

        ],
    },
    {
        path: "login",
        element: <Login/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "register",
        element: <Register/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "LogOut",
        element: <LogOutPage/>,
        errorElement: <ErrorPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <NotesProvider>
            <RouterProvider router={router}/>
        </NotesProvider>
    </React.StrictMode>,
)
