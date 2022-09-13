import { ActionIcon, Card, Group, Image, Menu, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconDots, IconTrash } from "@tabler/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePetDetails } from "../api/sitterApi";

export function PetCard({ pet }: any) {
  const queryClient = useQueryClient();

  const deletePet = useMutation(deletePetDetails, {
    onSuccess: () => {
      showNotification({
        title: "Pet Deleted",
        message: "Pet Detail had been deleted",
        color: "red",
        icon: <IconCheck />,
      });
      queryClient.invalidateQueries(["pet"]);
    },
  });

  return (
    <div className="pet-card">
      <Card withBorder shadow="sm" radius="md">
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500}>{pet.pet_name}</Text>
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon>
                  <IconDots size={16} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  onClick={() => deletePet.mutate(pet.id)}
                  icon={<IconTrash size={14} />}
                  color="red"
                >
                  Delete
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Card.Section>

        <div className="pet-data-flex">
          <Text size="sm" color="dimmed" weight={500}>
            Type: {pet.pet_type}
          </Text>
          <Text size="sm" color="dimmed" weight={500}>
            Gender: {pet.pet_gender}
          </Text>
        </div>
        <Text size="sm" color="dimmed" weight={500}>
          Weight: {pet.pet_weight}
        </Text>
        <Card.Section mt="sm">
          <Image height={180} width={250} src={pet.pet_img} />
        </Card.Section>
      </Card>
    </div>
  );
}
