import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Padding } from "@mui/icons-material";

function Header() {
    return (
        <header>
            <h1 
                style={{ 
                    display:"flex",  
                    alignItems:"center"}}>
                <EditNoteIcon 
                    sx ={{fontSize: "40px", }} 
                    style={{boxSizing: "border-box", 
                            boxShadow:"0 0 10px 0", 
                            marginRight:"10px"}}/>
                 Todo App
            </h1>
        </header>
    )
}

export default Header;