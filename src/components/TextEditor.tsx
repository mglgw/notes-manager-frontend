import {useContext, useEffect, useState} from 'react'
import {Editor, Toolbar} from '@wangeditor/editor-for-react'
import {i18nChangeLanguage, IDomEditor, IEditorConfig, IToolbarConfig} from '@wangeditor/editor'
import {NotesContext} from "../store/NotesContext.tsx";

i18nChangeLanguage('en')

function TextEditor() {
    const [editor, setEditor] = useState<IDomEditor | null>(null)  // TS syntax
    const notesContext = useContext(NotesContext)
    useEffect(() => {
        setTimeout(() => {
            notesContext.setHtml('')
        }, 1500)
    }, [])

    const toolbarConfig: Partial<IToolbarConfig> = {}

    const editorConfig: Partial<IEditorConfig> = {
        placeholder: "Type here...",
        MENU_CONF: {
            fontFamily: {
                fontFamilyList: [
                    {name: 'Tahoma', value: 'Tahoma'},
                    {name: 'Arial', value: 'Arial'},
                    {name: 'Verdana', value: 'Verdana'},
                ]
            }
        }
    }

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