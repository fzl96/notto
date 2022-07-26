import { Menu, Divider, Text, Button } from "@mantine/core";
import { MenuDropdown } from "@mantine/core/lib/Menu/MenuDropdown/MenuDropdown";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface Props {
  onDelete: () => void;
}

const CardMenu = ({ onDelete }: Props) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <Menu.Target>
        <p>
          <BiDotsVerticalRounded className="cursor-pointer" />
        </p>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Edit</Menu.Item>
        <Divider />
        <Menu.Item color="red">
          {/* <button onClick={onDelete}>Delete note</button> */}
          <p onClick={onDelete}>Delete note</p>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default CardMenu;
