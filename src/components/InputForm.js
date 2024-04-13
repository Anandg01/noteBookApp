import React, { useState } from "react";

const InputForm = (probs) => {
    const [formData, setformData] = useState({
        title: '',
        noteDesc: ""
    })

   const handelChange=(event)=>{
    const {name, value}=event.target;
    setformData(p=>{
        return {
            ...p,
            [name]:value
        }
    })
   }
   
  const handelSubmit=(event)=>{
    event.preventDefault();
    probs.onSubmitNote(formData)
    setformData({
        title: '',
        noteDesc: ""
    })
  }

    return <>
        <form onSubmit={handelSubmit}>
            <div>
                <label>Note Title</label>
                <input
                name="title"
                    type="text"
                    value={formData.title}
                    onChange={handelChange}
                />
            </div>

            <div>
                <label>Note Desc</label>
                <br />
                <textarea 
                value={formData.noteDesc} 
                name="noteDesc"
                onChange={handelChange}

                />
            </div>
            <button type="submit">submit</button>
        </form>
    </>
}

export default InputForm