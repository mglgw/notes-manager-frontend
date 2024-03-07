import Table from "../Table.tsx";
import HeadingWithIcon from "../HeadingWithIcon.tsx";
import LatestNote from "../LatestNote.tsx";
import LatestNoteWrapper from "../LatestNoteWrapper.tsx";
import {useContext} from "react";
import {NotesContext} from "../../store/NotesContext.tsx";

export interface Note {
    content: string;
    createdBy: string;
    createdDate: string;
    id: number;
    modifiedDate: string;
    title: string;
}

const Home = () => {
    const notesContext = useContext(NotesContext)
    return (
        <div id="Home" className={"w-auto sm: p-12 md:w-full left-14 top-0 pt-16"}>
            <HeadingWithIcon text={"❏ Latest Notes"}/>
            <LatestNoteWrapper>
                {notesContext.notes.slice(0, 3).map(note => <LatestNote key={note.id} content={note.content}
                                                                        title={note.title}/>)}
            </LatestNoteWrapper>
            <HeadingWithIcon text={"❏ My Notes"}/>
            <Table></Table>
        </div>
    );
};

export default Home;