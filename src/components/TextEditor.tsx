import {useContext, useEffect, useState} from 'react'
import {Editor, Toolbar} from '@wangeditor/editor-for-react'
import {i18nChangeLanguage, IDomEditor, IEditorConfig, IToolbarConfig} from '@wangeditor/editor'
import {NotesContext} from "../store/NotesContext.tsx";

i18nChangeLanguage('en')

function TextEditor() {
    // editor instance
    const [editor, setEditor] = useState<IDomEditor | null>(null)  // TS syntax
    const notesContext = useContext(NotesContext)
    // const [editor, setEditor] = useState(null)                  // JS syntax

    //Simulate ajax async set html
    useEffect(() => {
        setTimeout(() => {
            notesContext.setHtml('')
        }, 1500)
    }, [])

    const toolbarConfig: Partial<IToolbarConfig> = {}  // TS syntax

    const editorConfig: Partial<IEditorConfig> = {  // TS syntax
        placeholder: "Type here...",
        MENU_CONF: {
            fontFamily: {
                fontFamilyList: [
                    // Support two format
                    //   1. string
                    //   2. object like { name: 'xxx', value: 'xxx' }
                    {name: 'Tahoma', value: 'Tahoma'},
                    {name: 'Arial', value: 'Arial'},
                    {name: 'Verdana', value: 'Verdana'},
                ]
            }
        }
    }

    // Timely destroy editor, important!
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <>
            <div className={"w-fit"}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{borderBottom: '1px solid #ccc'}}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={notesContext.html}
                    onCreated={setEditor}
                    onChange={editor => notesContext.setHtml(editor.getHtml())}
                    mode="default"
                    style={{height: '1000px', overflowY: 'hidden'}}
                />
            </div>
        </>
    )
}

export default TextEditor