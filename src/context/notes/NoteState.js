import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialnotes = [
    {
      _id: "61a38648a58a845b39f798c5",
      user: "61a0d74ebe4273da1dfd993e",
      title: "my title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2021-11-28T13:38:16.151Z",
      __v: 0,
    },
    {
      _id: "61a38648a58a845b39f798c7",
      user: "61a0d74ebe4273da1dfd993e",
      title: "my title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2021-11-28T13:38:16.353Z",
      __v: 0,
    },
    {
      _id: "61a38648a58a845b39f798c9",
      user: "61a0d74ebe4273da1dfd993e",
      title: "my title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2021-11-28T13:38:16.957Z",
      __v: 0,
    },
    {
      _id: "61a38649a58a845b39f798cb",
      user: "61a0d74ebe4273da1dfd993e",
      title: "my title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2021-11-28T13:38:17.095Z",
      __v: 0,
    },
    {
      _id: "61a38649a58a845b39f798cd",
      user: "61a0d74ebe4273da1dfd993e",
      title: "my title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2021-11-28T13:38:17.314Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialnotes);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
