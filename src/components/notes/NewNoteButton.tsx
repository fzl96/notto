import { useMantineColorScheme } from "@mantine/core";

const NewNoteButton = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div
      className={`${
        dark ? "bg-grayishDark" : "bg-white"
      } rounded-2xl p-5 shadow-sm min-h-[10rem] flex flex-col justify-center items-center gap-3`}
    >
      <div className="h-auto w-[5rem] ">
        <img src="/add_notes.svg" />
      </div>
      <h3 className="text-slate-600">+ Add new note</h3>
    </div>
  );
};
export default NewNoteButton;
