import React from "react";

export default function Noteitem(props) {
  const { note } = props;
  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i class="fa fa-trash-o mx-2" aria-hidden="true"></i>
            <i class="fa fa-pencil-square-o mx-2" aria-hidden="true"></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
