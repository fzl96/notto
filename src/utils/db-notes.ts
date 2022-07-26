import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const pinNote = async (noteId: string, isPinned: boolean) => {
  try {
    const noteRef = doc(db, `notes/${noteId}`);
    await updateDoc(noteRef, { pinned: !isPinned });
  } catch (error) {
    console.error(error);
  }
};

export const deleteNote = async (noteId: string) => {
  try {
    const noteRef = doc(db, `notes/${noteId}`);
    await deleteDoc(noteRef);
    console.log("Note deleted");
  } catch (error) {
    console.error(error)
  }
}