import {
  createContext,
  useEffect,
  useState,
  useContext,
  useReducer,
} from "react";
import { db } from "../../../../config/firebase";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import type { NoteType } from "../../../../utils/types";
import { deleteNote } from "../../../../utils/db-notes";

export const NotesContext = createContext<NoteType[]>([]);

interface NotesContextProviderProps {
  children: React.ReactNode;
}

export const NotesContextProvider = ({ children }: NotesContextProviderProps) => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    const noteRef = collection(db, "notes");
    const q = query(noteRef, orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let notesArray: any = [];
      querySnapshot.forEach((doc) => {
        notesArray.push({ ...doc.data(), id: doc.id });
      });
      setNotes(notesArray);
    });
    return () => unsub();
  }, []);

  return (
    <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
  );
};

export const useNotesContext = () => useContext(NotesContext);
