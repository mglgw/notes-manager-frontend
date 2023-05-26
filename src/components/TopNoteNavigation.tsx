import TextEditor from "./TextEditor.tsx";
import axios from "axios";
import {NotesContext} from "../store/NotesContext.tsx";
import {useContext} from "react";

const TopNoteNavigation = () => {
    const notesContext = useContext(NotesContext)
    console.log(notesContext.noteId)
    const content = notesContext.html;
    const strCopy = content.split(" ");
    const title = strCopy.slice(0, 6).reduce((newWord, currentWord) => newWord + " " + currentWord + " ")

    const submitNote = async () => {

        console.log(title)
        if (notesContext.noteId === null) {
            const res = await axios.post("https://localhost:7052/api/notes", {content, title}, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.status === 200) {
                notesContext.getNotes();
                notesContext.setNoteId(res.data.id)

            }
        } else {
            const res = await axios.put("https://localhost:7052/api/notes", {content, title, id: notesContext.noteId}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.status === 200) {
                notesContext.getNotes();
            }
        }

    }
    console.log("https://localhost:7052/api/notes/" + notesContext.noteId)
    const deleteNote = async () => {
        const res = await axios.delete("https://localhost:7052/api/notes/" + notesContext.noteId, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        notesContext.getNotes();
        if (res.status === 200) {
            notesContext.setNoteId(null)
        }


    }

    return (
        <div className={"flex flex-col min-h-fit h-16 w-fit"}>

            <TextEditor/>
            <button className={"mb-2 hover:bg-ph-orange-500 hover:text-shark-900 hover:drop-shadow"}
                    onClick={submitNote}>Save
            </button>
            <button className={"hover:bg-ph-orange-500 hover:text-shark-900 hover:drop-shadow"}
                    onClick={deleteNote}>Delete note
            </button>
        </div>
    );
};

export default TopNoteNavigation;