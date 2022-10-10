import {
  Divider,
  Paper,
  Title,
  Text,
  Grid,
  Avatar,
  TextInput,
  NumberInput,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { acceptResponseById } from "../api/sitterApi";
import { UserNav } from "../components/UserNav";

const Checkout = () => {
  const { state } = useLocation();
  const { data, petData } = state;
  const navigate = useNavigate()

  const queryClient = useQueryClient();

  const acceptResponse = useMutation(acceptResponseById, {
    onSuccess: () => {
      showNotification({
        title: "Response accepted",
        message: "Response had been accepted successfully",
        color: "green",
        icon: <IconCheck />,
      });
      queryClient.invalidateQueries(["active_reqs"]);
      queryClient.invalidateQueries(["inactive_reqs"]);
      navigate("/user/find/sitter")
    },
  });

  const updateData = {
    prize: data.prize,
    sitter_id: data.user_id,
    sitter_req_id: data.sitter_req_id,
  };

  return (
    <div>
      <UserNav activeLink={1} />
      <div
        style={{
          display: "flex",
          gap: "2em",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50vw" }}>
          <Paper withBorder px="xl" mb="xl" py="lg" shadow="md">
            <Title color="dark">Checkout </Title>
            <Divider mb="md" />
            <Text weight={600} size="lg" color="dimmed">
              Sitter Details
            </Text>
            <Divider mb="md" />
            <Grid>
              <Grid.Col
                style={{ display: "grid", placeItems: "center" }}
                span={3}
              >
                <Avatar src={data.avatar_img} size={100} />
              </Grid.Col>
              <Grid.Col span={9}>
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
                  Response: {data.response}
                </Text>
              </Grid.Col>
            </Grid>
            <Text mt="md" weight={600} size="lg" color="dimmed">
              Pet Details
            </Text>
            <Divider mb="md" />
            <Grid>
              <Grid.Col
                style={{ display: "grid", placeItems: "center" }}
                span={3}
              >
                <Avatar src={petData.pet_img} size={100} />
              </Grid.Col>
              <Grid.Col span={9}>
                <Text size="md" color="dark" weight={600}>
                  Pet: {petData.pet_name}
                </Text>
                <Text size="md" color="dimmed" weight={500}>
                  Type: {petData.pet_type}
                </Text>
                <Text size="md" color="dimmed" weight={500}>
                  Pin: {data.pincode}
                </Text>
                <Text size="md" color="dimmed" weight={500}>
                  Response: {data.response}
                </Text>
              </Grid.Col>
            </Grid>
            <Text mt="lg" weight={600} size="xl" color="dark">
              Card Details
            </Text>
            <Divider mb="md" />
            <div style={{ width: "25vw" }}>
              <TextInput required mb="md" label="Name on card" />
              <NumberInput mb="md" required label="Card number" />
              <SimpleGrid cols={2}>
                <NumberInput required label="Expiration" />
                <TextInput required label="CVV" mb={50} />
              </SimpleGrid>
            </div>
          </Paper>
        </div>
        <div style={{ width: "30vw" }}>
          <Paper withBorder px={30} py="lg" shadow="md">
            <Text weight={600} size="lg">
              Payment Details
            </Text>
            <Divider mb="md" />
            <SimpleGrid cols={2} mb="sm">
              <Text>Main Amount</Text>
              <Text align="right">₹ {data.prize}</Text>
            </SimpleGrid>
            <SimpleGrid cols={2} mb="sm">
              <Text>Charges</Text>
              <Text align="right" color="dimmed">+ 18%</Text>
            </SimpleGrid>
            <SimpleGrid cols={2} mb="md">
              <Text>Charges Amount</Text>
              <Text align="right" color="dimmed">+ ₹ {(data.prize/100)*18}</Text>
            </SimpleGrid>
            <Divider mb="sm"/>
            <SimpleGrid cols={2} mb="lg">
              <Text size="lg">Total Amount</Text>
              <Text size="lg" align="right" color="dark">₹ {((data.prize/100)*18)+data.prize}</Text>
            </SimpleGrid>
            <Button fullWidth onClick={()=>acceptResponse.mutate(updateData)} color="dark">Checkout</Button>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
