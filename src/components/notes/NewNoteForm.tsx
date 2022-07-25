import { useState, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Editor } from "@tinymce/tinymce-react";

const NewNoteForm = () => {
  const editorRef: any = useRef();
  const [title, setTitle] = useState("untitled");
  const [body, setBody] = useState("empty");

  return (
    <form
      className={`w-full flex flex-col gap-5 bg-white h-full rounded-2xl pt-10 lg:px-20 px-7`}
      // onSubmit={handleSubmit}
    >
      {/* <Picker onEmojiClick={onEmojiClick} /> */}
      <TextareaAutosize
        autoFocus
        className="text-4xl resize-none bg-transparent focus:outline-none font-semibold w-full"
        placeholder="untitled"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <Editor
          // className="border-none"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            // toolbar:
            //   "undo redo | formatselect | " +
            //   "bold italic backcolor | alignleft aligncenter " +
            //   "alignright alignjustify | bullist | numlist outdent indent | " +
            //   "removeformat | help",
          }}
        />
      </div>
      {/* <TextareaAutosize
        className="text-xl resize-none bg-transparent focus:outline-none  w-full"
        placeholder="type something here"
        onChange={(e) => setBody(e.target.value)}
      /> */}
    </form>
  );
};
export default NewNoteForm;
