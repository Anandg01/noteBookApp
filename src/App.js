import React, { useState, useEffect } from 'react'
import InputForm from './components/InputForm';
import ShowNoteList from './components/ShowNoteList';
function App() {

  const [noteData, setNoteData] = useState([])
  const [showData, setShowData] = useState([])
  const [serchText, setSerchText] = useState("");


  const serchInputHandler = (event) => {
    console.log(event.target.value)
    const value = event.target.value.toLowerCase();
    setSerchText(value)
    console.log(value, 'serch input')
  }

  useEffect(() => {
    let filterData = noteData;
    if (serchText) {
      filterData = noteData.filter((data) => data.title.toLowerCase().includes(serchText.trim()))
    }
    setShowData(filterData)

  }, [serchText, noteData])

  const handelInput = (obj) => {
    console.log(obj)
    setNoteData(arr => {
      return [...arr, { ...obj, id: Math.random().toString() }]
    })
  }

  const deltehandel = (noteId) => {
    console.log(noteId)
    const updatedData=noteData.filter(data=>data.id!==noteId)
    setNoteData(updatedData)
  }

  const displayNoteList = showData.map((item, index) => (
    <ShowNoteList
      key={index}
      note={item}
      onDelete={deltehandel}
    />
  ))

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 >Note Book</h1>
        <div>
          <label>Search Notes</label>
          <input
            value={serchText}
            onChange={serchInputHandler}
            type='text'
          />
        </div>
        Total Notes:{noteData.length}
        <br/>
        showing:{showData.length}
      </div>
      <InputForm onSubmitNote={handelInput} />
      {displayNoteList}
    </>
  );
}

export default App;
