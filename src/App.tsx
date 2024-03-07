import './App.css'
import SideMenu from "./components/SideBar/SideMenu.tsx";
import TopBar from "./components/TopBar/TopBar.tsx";
import MainContent from "./components/MainContent.tsx";
import {useContext, useEffect} from "react";
import {NotesContext} from "./store/NotesContext.tsx";
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';

function App() {
    const navigate = useNavigate();
    const notesContext = useContext(NotesContext);
    console.log(!!Cookies.get(".AspNetCore.Identity.Application"));
    const Cookie = Cookies.get(".AspNetCore.Identity.Application");

    if (Cookie === undefined || Cookie === "" || Cookie === null) {
        navigate("/login")
    }
    useEffect(() => {
        notesContext.getNotes();
    }, []);

    return (
        <>
            <SideMenu/>
            <TopBar/>
            <MainContent/>
        </>
    )
}

export default App
