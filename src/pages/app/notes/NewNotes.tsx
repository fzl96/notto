import { useMantineColorScheme } from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import FolderSelection from "../../../components/notes/FolderSelection";
import "../../../styles/rte.css";
import { addNote } from "../../../utils/db-notes";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

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
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          className={`${
            dark ? "bg-grayishDark" : "bg-white"
          } w-full flex flex-col gap-5 min-h-[95vh] rounded-2xl pt-10 lg:px-20 px-7`}
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
          <div>
            <p className="flex items-center gap-10">
              Folder
              <span>
                <FolderSelection />
              </span>
            </p>
          </div>
          <div className="pb-10">
            <RichTextEditor value={body} onChange={setBody} />
          </div>
        </motion.form>
      </AnimatePresence>
    </>
  );
};
export default NewNotes;
