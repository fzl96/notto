import { Divider, Menu } from "@mantine/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { pinNote } from "../../utils/db-notes";
import { BiDotsHorizontalRounded } from 'react-icons/bi';


interface Props {
  onDelete: () => void;
  noteId: string;
  isPinned: boolean;
}

const CardMenu = ({ onDelete, noteId, isPinned }: Props) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <Menu.Target>
        <p>
          <BiDotsHorizontalRounded className="cursor-pointer" />
        </p>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>
          <p onClick={() => pinNote(noteId, isPinned)}>{isPinned? "unpinned": "pin" }</p>
        </Menu.Item>
        <Divider />
        <Menu.Item color="red">
          <p onClick={onDelete}>Delete note</p>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default CardMenu;
