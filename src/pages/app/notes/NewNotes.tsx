import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import Picker from "emoji-picker-react";
import Tiptap from "../../../components/notes/TextEditor";
import { AnimatePresence, motion } from "framer-motion";
import { RichTextEditor } from "@mantine/rte";
import "../../../styles/rte.css";
import { useMantineColorScheme } from "@mantine/core";
import { addNote } from "../../../utils/db-notes";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

const NewNotes = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [body, setBody] = useState(initialValue);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const navigate = useNavigate();
  const [title, setTitle] = useState("untitled");

  const onEmojiClick = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const newNote = await addNote({ title, body });

    if (newNote) {
      return navigate(`/app/notes/${newNote}`);
    }
    return navigate(-1);
  };

  return (
    <>
      <AnimatePresence>
        <motion.form
          // key={title}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          className={`${
            dark ? "bg-grayishDark" : "bg-white"
          } w-full flex flex-col gap-5 h-full rounded-2xl pt-10 lg:px-20 px-7`}
          onSubmit={handleSubmit}
        >
          <button type="submit">Submit</button>
          <hr />
          <TextareaAutosize
            className="text-5xl resize-none bg-transparent focus:outline-none font-semibold w-full"
            placeholder="untitled"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <div className="pb-10">
            <RichTextEditor value={body} onChange={setBody} />
          </div>
          {/* <Tiptap /> */}
        </motion.form>
      </AnimatePresence>
    </>
  );
};
export default NewNotes;
