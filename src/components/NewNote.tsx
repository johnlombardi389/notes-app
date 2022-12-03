import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// Components
import NoteForm from "./NoteForm";

function NewNote() {
  return (
    <>
      <h1 className="mb-4">New</h1>
      <NoteForm />
    </>
  );
}

export default NewNote;
