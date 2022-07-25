import { Menu, Divider, Text, Button } from "@mantine/core";
import { MenuDropdown } from "@mantine/core/lib/Menu/MenuDropdown/MenuDropdown";
import { BiDotsVerticalRounded } from "react-icons/bi";

interface Props {
  onDelete: () => void;
}

const CardMenu = ({ onDelete }: Props) => {
  return (
    <Menu>
      <Menu.Target>
        <p>
          <BiDotsVerticalRounded className="cursor-pointer" />
        </p>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

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
