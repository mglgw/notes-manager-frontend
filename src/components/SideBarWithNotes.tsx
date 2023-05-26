import SideBarNote from "./SideBarNote.tsx";
import {Note} from "./Pages/Home.tsx";
import {useContext} from "react";
import {NotesContext} from "../store/NotesContext.tsx";

interface ShowNotesProps {
    html: string;
    setHtml: (text: string) => void;
    notes: Note[];
    noteId: null;
    setNoteId: (id: null) => void;

}

const SideBarWithNotes = (props: ShowNotesProps) => {
    const notesContext = useContext(NotesContext)
    return (
        <div className={"h-screen overflow-y-auto no-scrollbar"}>
            <div className={"h-full w-56"}>
                <div className={" flex-col flex text-center items-center justify-center w-56"}>
                    <div className={"h-16 p-5"}>My Notes</div>
                    <SideBarNote setHtml={notesContext.setHtml} content={""}
                                 title={"New Note"} noteId={null}/>
                    {notesContext.notes.map(note => <SideBarNote setHtml={props.setHtml}
                                                                 key={note.id}
                                                                 content={note.content} title={note.title}
                                                                 noteId={note.id}/>)}
                </div>
            </div>
        </div>
    );
};

export default SideBarWithNotes;