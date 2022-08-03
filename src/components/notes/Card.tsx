import { useMantineColorScheme } from "@mantine/core";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { deleteNote, pinNote } from "../../utils/db-notes";
import type { NoteType } from "../../utils/types";
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

  const removeHTMLTags = (str: string) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${
        dark ? "bg-grayishDark" : "bg-white"
      } rounded-2xl pt-3 px-5 pb-5 shadow-sm lg:min-h-[12rem] md:min-h-[12rem] flex flex-row-reverse justify-between lg:flex-col md:flex-col gap-3`}
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
      <div className="flex flex-col justify-between h-full gap-1">
        <Link to={`${note.id}`} key={note.id}>
          <div>
            <h3 className="text-lg font-semibold">{note.title}</h3>
            <p className="text-md hidden lg:block md:block">{removeHTMLTags(note.body).slice(0, 70)}</p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <AiOutlineCalendar />
          <p className="uppercase text-sm font-semibold">{createdAt}</p>
        </div>
      </div>
    </motion.div>
  );
};
export default Card;
