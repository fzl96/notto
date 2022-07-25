import type { NoteType } from "../../utils/types";
import { AiOutlineCalendar } from "react-icons/ai";
import { format } from "date-fns";
import { useMantineColorScheme } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import { pinNote, deleteNote } from "../../utils/db-notes";
import CardMenu from "./CardMenu";

interface Props {
  note: NoteType;
}

const Card: React.FC<Props> = ({ note }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  let createdAt;
  const noteDate: Date = note.createdAt.toDate();

  if (noteDate) {
    createdAt = format(noteDate, "MMM dd");
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${
        dark ? "bg-grayishDark" : "bg-white"
      } rounded-2xl pt-2 px-5 pb-5 shadow-sm min-h-[12rem] flex flex-col justify-between`}
    >
      <div className="flex gap-3 items-center justify-end">
        {note.pinned ? (
          <button onClick={() => pinNote(note.id, note.pinned)}>
            <BsPinAngleFill />
          </button>
        ) : (
          <button onClick={() => pinNote(note.id, note.pinned)}>
            <BsPinAngle />
          </button>
        )}
        <CardMenu onDelete={() => deleteNote(note.id)} />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold">{note.title}</h3>
          <p className="text-md">{note.body}</p>
        </div>
        <div className="flex items-center gap-3">
          <AiOutlineCalendar />
          <p className="uppercase text-sm font-semibold">{createdAt}</p>
        </div>
      </div>
    </motion.div>
  );
};
export default Card;
