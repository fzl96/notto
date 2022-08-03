import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/notes/Card";
import NewNoteButton from "../../../components/notes/NewNoteButton";
import { NoteType } from "../../../utils/types";
import { useNotesContext } from "./context/NotesContext";

const Notes = () => {
  const [open, setOpen] = useState(false);
  const notes: NoteType[] = useNotesContext();
  const [pinnedNotes, setPinnedNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    setPinnedNotes(notes.filter((note) => note.pinned));
  }, [notes]);

  return (
    <>
    <AnimatePresence>

        <motion.div
          // initial={{ opacity: 0, y: -60 }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -60 }}
          className="flex flex-col gap-5 lg:px-10 h-full"
        >
          <div className="flex flex-col gap-5">
            {pinnedNotes.length !== 0 ? (
              <>
                <h1 className="text-2xl  font-semibold ml-1">Pinned</h1>
                <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                  {pinnedNotes.map((note) => {
                    return <Card note={note} key={note.id}/>;
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
                return <Card key={note.id} note={note} />;
              })}
              <Link to="new">
                <NewNoteButton />
              </Link>
            </div>
          </div>
        </motion.div>
    </AnimatePresence>
    </>
  );
};
export default Notes;
