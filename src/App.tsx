import './App.css'
import SideMenu from "./components/SideBar/SideMenu.tsx";
import TopBar from "./components/TopBar/TopBar.tsx";
import MainContent from "./components/MainContent.tsx";
import {useContext, useEffect} from "react";
import {NotesContext} from "./store/NotesContext.tsx";

function App() {
    const notesContext = useContext(NotesContext)
    useEffect(() => {
        notesContext.getNotes();
    }, [])
    return (
        <>
            <SideMenu/>
            <TopBar/>
            <MainContent/>

        </>
    )
}

export default App
