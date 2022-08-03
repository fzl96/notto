import { useMantineColorScheme } from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { NoteType } from "../../../utils/types";
import { useNotesContext } from "./context/NotesContext";

const NoteId = () => {
  const navigate = useNavigate();
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

  // create a function that split string when there is '/' character
  const splitString = (str: string) => {
    if (!str) return "";
    return str.split("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      className={`${
        dark ? "bg-grayishDark3" : "bg-white"
      } lg:pt-10 lg:px-10 h-full w-full rounded-2xl shadow-lg`}
    >
      <div className="flex flex-col gap-4">
        <button
          className={`w-20 h-10 bg-grayishDark rounded-lg`}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <h1 className="text-5xl font-bold">{currentNote?.title}</h1>
        <p>{createdAt && createdAt}</p>
        <div className="pb-10">
          <RichTextEditor value={body} onChange={setBody} readOnly />
        </div>
      </div>
    </motion.div>
  );
};

export default NoteId;
