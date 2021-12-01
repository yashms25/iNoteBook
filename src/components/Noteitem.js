import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function Noteitem(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note } = props;
  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa fa-trash-o mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
              aria-hidden="true"
            ></i>
            <i className="fa fa-pencil-square-o mx-2" aria-hidden="true"></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
