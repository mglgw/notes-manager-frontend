import SideBarWithNotes from "../SideBarWithNotes.tsx";
import TopNoteNavigation from "../TopNoteNavigation.tsx";
import {useContext, useState} from "react";
import {NotesContext} from "../../store/NotesContext.tsx";

const ShowNotes = () => {
    const notesContext = useContext(NotesContext)

    const [html, setHtml] = useState('')
    const [noteId, setNoteId] = useState(null)
    return (
        <div>
            <div className={"flex"}>
                <div className={"static"}>
                    <SideBarWithNotes html={html} setHtml={setHtml}
                                      notes={notesContext.notes}
                                      setNoteId={setNoteId}
                                      noteId={noteId}/></div>
                <div className={"inline-block"}>
                    <TopNoteNavigation/></div>
            </div>
        </div>
    );
};

export default ShowNotes;