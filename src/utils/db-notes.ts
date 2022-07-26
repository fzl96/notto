import { async } from "@firebase/util";
import { doc, addDoc, updateDoc, deleteDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../config/firebase";

export const addNote = async ({ title, body }: {title: string, body: string}) => {
  const currentDate = new Date();
  const newNote =  await addDoc(collection(db, "notes"), {
    title,
    body,
    createdAt: Timestamp.fromDate(currentDate),
    pinned: false,
  });
  return newNote.id;
}

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
