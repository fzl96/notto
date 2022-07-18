import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export const useNotesContext = () => {
  return (
    useContext(NotesContext)
  )
};
