import { Menu, Divider, Text } from "@mantine/core";

interface Props {
  onDelete: () => void;
}

const CardMenu = ({ onDelete }: Props) => {
  return (
    <Menu>
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
        <button onClick={onDelete}>Delete note</button>
      </Menu.Item>
    </Menu>
  );
};

export default CardMenu;
