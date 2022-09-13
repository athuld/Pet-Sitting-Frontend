import { Avatar, Button, Grid, Paper, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptResponseById } from "../api/sitterApi";

const ResponseUserCard = ({ data, setOpen }: any) => {
  const queryClient = useQueryClient();

  const acceptResponse = useMutation(acceptResponseById, {
    onSuccess: () => {
      setOpen(false);
      showNotification({
        title: "Response accepted",
        message: "Response had been accepted successfully",
        color: "green",
        icon: <IconCheck />,
      });
      queryClient.invalidateQueries(["active_reqs"]);
      queryClient.invalidateQueries(["inactive_reqs"]);
    },
  });

  const updateData = {
    prize: data.prize,
    sitter_id: data.user_id,
    sitter_req_id: data.sitter_req_id,
  };

  return (
    <Paper withBorder mb="md" mt="md" shadow="md" px={35} py={10}>
      <Grid>
        <Grid.Col span={2} style={{ display: "grid", placeItems: "center" }}>
          <Avatar size={110} src={data.avatar_img} radius={100} />
        </Grid.Col>
        <Grid.Col span={8} style={{ display: "grid", placeItems: "center" }}>
          <div className="sitter-res-card-details">
            <Text size="md" color="dark" weight={600}>
              Sitter: {data.name}
            </Text>
            <Text size="md" color="dimmed" weight={500}>
              Phone: {data.phone}
            </Text>
            <Text size="md" color="dimmed" weight={500}>
              Pin: {data.pincode}
            </Text>
            <Text size="md" color="dimmed" weight={500}>
              Amount: {data.prize}
            </Text>
            <Text size="md" color="dimmed" weight={500}>
              Response: {data.response}
            </Text>
          </div>
        </Grid.Col>
        <Grid.Col style={{ display: "grid", placeItems: "center" }} span={2}>
          <Button
            onClick={() => acceptResponse.mutate(updateData)}
            color="green"
          >
            Accept
          </Button>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default ResponseUserCard;
