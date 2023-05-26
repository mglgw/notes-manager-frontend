import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {useCallback, useContext, useEffect, useState} from "react";
import {Note} from "./Pages/Home.tsx";
import {NotesContext} from "../store/NotesContext.tsx";


const columnHelper = createColumnHelper<Note>()

const columns = [
    columnHelper.accessor("title", {
        header: "Note Title",
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.content, {
        id: 'noteContent',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Note Content</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('modifiedDate', {
        header: () => 'Last Modified',
        cell: info => new Date(info.getValue()).toLocaleDateString(),
        footer: info => info.column.id,
    }),
]

const Table = () => {
    const [data, setData] = useState<Note[]>(() => [])
    const notesContext = useContext(NotesContext)
    const getNotes = useCallback(async () => {
        const domparser = new DOMParser();
        const parsedNotes = notesContext.notes;
        for (const note of parsedNotes) {
            note.title = (domparser.parseFromString(note.title, "text/html").body.innerText);
            note.content = (domparser.parseFromString(note.content, "text/html").body.innerText)
        }
        setData(parsedNotes);
    }, [notesContext.notes])

    useEffect(() => {
        getNotes().catch((error) => {
            console.error(error);

        });
    }, [notesContext.notes])

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <div>
            <table
                className={"rounded-md table-fixed w-full h-full border-separate border-spacing-0 border-2 border-ph-orange-500 "}>
                <thead className={"text-left"}>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}
                        className={"border-2 border-ph-orange-500"}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className={"border-2 border-ph-orange-500 "}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody className={"border-2 border-ph-orange-500 "}>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id} className={""}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className={"border-2 border-ph-orange-500"}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default Table;
