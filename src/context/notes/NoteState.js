import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialnotes = [];

  const [notes, setNotes] = useState(initialnotes);
  // get all notes

  const getNotes = async () => {
    // TODO api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMGQ3NGViZTQyNzNkYTFkZmQ5OTNlIn0sImlhdCI6MTYzODAyMDEzNX0.TNZyprcl4LUVY4nClZvhp018trQD2cAEf4HvhBXfhdI",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add note
  const addNote = async (title, description, tag) => {
    // TODO api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMGQ3NGViZTQyNzNkYTFkZmQ5OTNlIn0sImlhdCI6MTYzODAyMDEzNX0.TNZyprcl4LUVY4nClZvhp018trQD2cAEf4HvhBXfhdI",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    console.log(response);

    getNotes();
  };

  // delete note
  const deleteNote = async (id) => {
    // TODO api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMGQ3NGViZTQyNzNkYTFkZmQ5OTNlIn0sImlhdCI6MTYzODAyMDEzNX0.TNZyprcl4LUVY4nClZvhp018trQD2cAEf4HvhBXfhdI",
      },
    });
    console.log(response);

    getNotes();
  };

  // edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMGQ3NGViZTQyNzNkYTFkZmQ5OTNlIn0sImlhdCI6MTYzODAyMDEzNX0.TNZyprcl4LUVY4nClZvhp018trQD2cAEf4HvhBXfhdI",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    console.log(response);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
    getNotes();
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
