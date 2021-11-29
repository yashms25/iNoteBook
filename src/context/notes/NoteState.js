import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const s = {
    name: "yash",
    class: "IT",
  };
  const [state, setstate] = useState(s);
  const update = () => {
    setTimeout(() => {
      setstate({
        name: "kevin",
        class: "cs",
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
