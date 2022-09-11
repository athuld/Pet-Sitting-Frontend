import { ActionIcon, Card, Group, Image, Menu, Text } from "@mantine/core";
import { IconDots, IconTrash } from "@tabler/icons";


export function PetCard() {
  return (
    <div className="pet-card">
      <Card withBorder shadow="sm" radius="md">
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500}>Toby</Text>
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon>
                  <IconDots size={16} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<IconTrash size={14} />} color="red">
                  Delete
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Card.Section>

        <div className="pet-data-flex">
          <Text size="sm" color="dimmed" weight={500}>
            Type: Dog
          </Text>
          <Text size="sm" color="dimmed" weight={500}>
            Gender: Male
          </Text>
        </div>
        <Text size="sm" color="dimmed" weight={500}>
          Weight: 5kg
        </Text>
        <Card.Section mt="sm">
          <Image
            height={180}
            width={250}
            src="https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
          />
        </Card.Section>
      </Card>
    </div>
  );
}
