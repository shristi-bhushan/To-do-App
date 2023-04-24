import { Fab } from "@mui/material";
import React, { useState } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';


function NoteArea (props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) { 
        const { name, value } = event.target;
        setNote(preNote => {
            return {
                ...preNote,
                [name]: value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="add-note">
                <input 
                    type="text" 
                    name="title" 
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Task-to-do"

                />
                <textarea 
                    name="content"
                    rows="4"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Add note here..."
                />
                <Fab onClick={submitNote}>
                    <AddTaskIcon />
                </Fab>

            </form>
        </div>
    )
}

export default NoteArea;