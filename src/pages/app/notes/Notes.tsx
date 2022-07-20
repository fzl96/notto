import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/notes/Card";
import NewNoteButton from "../../../components/notes/NewNoteButton";
import NewNoteModal from "../../../components/notes/NewNoteModal";
import { useNotesContext } from "../../../hooks/UseNotesContext";
import { NoteType } from "../../../utils/types";
import { motion } from 'framer-motion';

const Notes = () => {
  const [open, setOpen] = useState(false);
  const notes: NoteType[] = useNotesContext();

  return (
    <>
      <div className="flex flex-col gap-5 lg:px-10 h-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl  font-semibold ml-1">Pinned</h1>
          <motion.div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
            {notes.map((note: NoteType, index: number) => {
              // if (index > 2) return null;
              return <Card key={note.id} note={note} />;
            })}
          </motion.div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold ml-1">Recent notes</h1>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
            {notes.map((note: NoteType, index: number) => {
              if (index > 2) return null;
              return <Card key={note.id} note={note} />;
            })}
            <button onClick={() => setOpen(true)}>
              <NewNoteButton />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && <NewNoteModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};
export default Notes;
