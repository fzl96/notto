import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../../../components/notes/Card";
import NewNoteButton from "../../../components/notes/NewNoteButton";
import NewNoteModal from "../../../components/notes/NewNoteModal";
import { useNotesContext } from "./context/NotesContext";
import { NoteType } from "../../../utils/types";
import { motion } from "framer-motion";
import NoteForm from "../../../components/notes/NoteForm";
import { Link } from "react-router-dom";

const Notes = () => {
  const [open, setOpen] = useState(false);
  const notes: NoteType[] = useNotesContext();
  const [pinnedNotes, setPinnedNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    setPinnedNotes(notes.filter((note) => note.pinned));
  }, [notes]);

  return (
    <>
      <div className="flex flex-col gap-5 lg:px-10 h-full">
        <div className="flex flex-col gap-5">
          {pinnedNotes.length !== 0 ? (
            <>
              <h1 className="text-2xl  font-semibold ml-1">Pinned</h1>
              <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {pinnedNotes.map((note) => {
                  return <Card note={note} />;
                })}
              </motion.div>
            </>
          ) : null}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold ml-1">Recent notes</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {notes.map((note: NoteType, index: number) => {
              // if (index > 2) return null;
              if (note.pinned) return null;
              return (
                <Link to={`${note.id}`} key={note.id}>
                  <Card note={note} />
                </Link>
              );
            })}
            <Link to="new">
              <NewNoteButton />
            </Link>
          </div>
        </div>
      </div>
      {/* <AnimatePresence>
        {open && <NewNoteModal onClose={() => setOpen(false)} />}
      </AnimatePresence> */}
    </>
  );
};
export default Notes;
