import {createContext, FC, ReactNode, useCallback, useState} from 'react';
import axios from "axios";
import {Note} from "../components/Pages/Home.tsx";

export interface INotesContext {
    notes: Note[],
    getNotes: () => void;
    html: string;
    setHtml: (text: string) => void;
    noteId: null | number;
    setNoteId: (id: null | number) => void;
}

export const defaultNotesContext: INotesContext = {
    notes: [],
    html: "",
    noteId: null,
    setHtml: () => {
        return;
    },
    getNotes: () => {
        return;
    },
    setNoteId: () => {
        return;
    }
};

export const NotesContext = createContext(defaultNotesContext);

const NotesProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [html, setHtml] = useState<string>("");
    const [noteId, setNoteId] = useState<null | number>(null);

    const getNotes = useCallback(async () => {
        const res = await axios.get<Note[]>('https://localhost:7052/api/notes')
        setNotes(res.data);
    }, [])

    return (
        <NotesContext.Provider value={{
            notes: notes,
            getNotes: getNotes,
            html: html,
            setHtml: setHtml,
            noteId: noteId,
            setNoteId: setNoteId,

        }}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesProvider;