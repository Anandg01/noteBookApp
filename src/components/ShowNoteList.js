import React from "react";


const ShowNoteList = (probs) => {
    const note = probs.note
    console.log(note.id, note)

    const clickHandeler = (event) => {
        probs.onDelete(event.target.id)
    }


    return <div style={{marginTop:'15px'}} >

        <div id={note.id}>

            <h2 style={{display:'inline'}}>{note.title}</h2><br/>
            {note.noteDesc}

        </div>

        <button
            id={note.id}
            onClick={clickHandeler}
        >
            Delete</button>
    </div>
}

export default ShowNoteList;