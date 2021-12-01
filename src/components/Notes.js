import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes } = context;
  return (
    <div>
      <Addnote />

      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
}
