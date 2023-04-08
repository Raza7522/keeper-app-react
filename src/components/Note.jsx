import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div
      className="note"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.content} </p>
      <button>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
