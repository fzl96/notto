import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import { db } from "../../../config/firebase";
import Picker from "emoji-picker-react";
import Tiptap from "../../../components/notes/TextEditor";
import { motion } from "framer-motion";
import { RichTextEditor } from "@mantine/rte";
import '../../../styles/rte.css'
import { useMantineColorScheme } from "@mantine/core";

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
    const currentDate = new Date();
    if (!title || !body) {
      console.log("no");
      return null;
    }
    const newNote = await addDoc(collection(db, "notes"), {
      title,
      body,
      createdAt: Timestamp.fromDate(currentDate),
      pinned: false,
    });
    return navigate(`/app/notes/${newNote.id}`);
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${dark ? 'bg-grayishDark' : "bg-white"} w-full flex flex-col gap-5 h-full rounded-2xl pt-10 lg:px-20 px-7`}
        onSubmit={handleSubmit}
      >
        <button type="submit">Submit</button>
        <TextareaAutosize
          className="text-5xl resize-none bg-transparent focus:outline-none font-semibold w-full"
          placeholder="untitled"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="pb-10">
          <RichTextEditor value={body} onChange={setBody} />
        </div>
        {/* <Tiptap /> */}
      </motion.form>
    </>
  );
};
export default NewNotes;
