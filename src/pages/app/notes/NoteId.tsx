import { useParams } from "react-router-dom";
import { useNotesContext } from "./context/NotesContext";
import type { NoteType } from "../../../utils/types";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { useMantineColorScheme } from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import { useState } from "react";

const NoteId = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const notes: NoteType[] = useNotesContext();
  const { id } = useParams();
  const currentNote: NoteType | undefined = notes.find(
    (note: NoteType) => note.id === id
  );
  let createdAt;
  const noteDate: Date = currentNote && currentNote.createdAt.toDate();

  if (noteDate) {
    createdAt = format(noteDate, "MMM dd");
  }
  const [body, setBody] = useState(currentNote?.body || "");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        // transition={ { duration: 0.2 } }
        className={`${
          dark ? "bg-grayishDark" : "bg-white"
        } lg:p-20 h-full w-full rounded-2xl shadow-lg`}
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">{currentNote?.title}</h1>
          <p>{createdAt && createdAt}</p>
          <div className="pb-10">
            <RichTextEditor value={body} onChange={setBody} readOnly/>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NoteId;
