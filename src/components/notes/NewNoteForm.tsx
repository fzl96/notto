import { useState, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { RichTextEditor } from "@mantine/rte";
import NoteForm from "./NoteForm";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

const NewNoteForm = () => {
  const [title, setTitle] = useState("untitled");
  const [body, setBody] = useState("empty");
  const [value, onChange] = useState(initialValue);

  return (
    // <form
    //   className={`w-full flex flex-col gap-5 bg-white h-full rounded-2xl pt-10 lg:px-20 px-7`}
    //   onSubmit={handleSubmit}
    // >
    //   <Picker onEmojiClick={onEmojiClick} />
    //   <TextareaAutosize
    //     autoFocus
    //     className="text-4xl resize-none bg-transparent focus:outline-none font-semibold w-full"
    //     placeholder="untitled"
    //     onChange={(e) => setTitle(e.target.value)}
    //   />
    //   <div>
    <NoteForm />
    //   </div>
    //   <TextareaAutosize
    //     className="text-xl resize-none bg-transparent focus:outline-none  w-full"
    //     placeholder="type something here"
    //     onChange={(e) => setBody(e.target.value)}
    //   />
    // </form>
  );
};
export default NewNoteForm;
