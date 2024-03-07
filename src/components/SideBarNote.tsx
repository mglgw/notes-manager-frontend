import {FC, useContext} from "react";
import {NotesContext} from "../store/NotesContext.tsx";

interface SideBarNoteProps {
    setHtml: (text: string) => void;
    content: string;
    title: string;
    noteId: null | number;
}

const SideBarNote: FC<SideBarNoteProps> = (props) => {
    const notesContext = useContext(NotesContext)
    const setNoteHtml = () => {
        notesContext.setHtml(props.content);
        notesContext.setNoteId(props.noteId)
    }
    const domparser = new DOMParser();
    const parsedTitle = domparser.parseFromString(props.title, "text/html");
    return (
        <div onClick={setNoteHtml}
             className={`flex flex-col text-center items-stretch static grow justify-center align-middle p-1 w-48 h-24 border-2 border-solid border-ph-orange-50 hover:bg-ph-orange-500 hover:text-shark-900 " +
                 "hover:drop-shadow text-lg ${notesContext.noteId === props.noteId ? " bg-ph-orange-500 text-shark-900 " : ""}`}>
            {parsedTitle.body.innerText}
        </div>
    );
};
export default SideBarNote;