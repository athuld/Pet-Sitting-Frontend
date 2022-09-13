import {
  Modal,
  Paper,
  SimpleGrid,
  Image,
  Text,
  Title,
  NumberInput,
  Textarea,
  Button,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addResponseById } from "../api/sitterApi";

const ViewSitterRequest = ({ reqViewOpen, setReqViewOpen, data }: any) => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [resDetails, setResDetails] = useState<any>({});
  const addResponse = useMutation(addResponseById, {
    onSuccess: () => {
      setLoading(false);
      setReqViewOpen(false);
      showNotification({
        title: "Response recorded",
        message: "Response has been recorded successfully",
        color: "green",
        icon: <IconCheck />,
      });
      queryClient.invalidateQueries(["active-by-pin"]);
    },
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    if (e.target.inputMode === "numeric") {
      setResDetails((prev: any) => ({
        ...prev,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setResDetails((prev: any) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setLoading(true);
    addResponse.mutate({ data: resDetails, req_id: data.req_id });
  };

  return (
    <>
      <Modal
        opened={reqViewOpen}
        onClose={() => setReqViewOpen(false)}
        fullScreen
      >
        <div className="view-modal-container">
          <div>
            <div className="view-modal-req">
              <Paper withBorder shadow="md" ml="xl" mb="md" p="xl">
                <Title mb="sm" color="dimmed">
                  Request Details
                </Title>
                <Text mb="xs" color="dark" weight={600}>
                  Date: {data.date}
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Time: {data.time}
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Base Prize: Rs.{data.base_prize}
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Instructions: {data.instructions}
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Address: {data.address}
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Pincode: {data.pincode}
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Phone: {data.phone}
                </Text>
              </Paper>
            </div>
            <div className="view-modal-req">
              <Paper withBorder shadow="md" ml="xl" p="xl">
                <SimpleGrid cols={2}>
                  <div>
                    <Title mb="sm" color="dimmed">
                      Pet Details
                    </Title>
                    <Text mb="xs" color="dark" weight={600}>
                      Name: {data.pet_name}
                    </Text>
                    <Text mb="xs" color="dark" weight={600}>
                      Type: {data.pet_type}
                    </Text>
                    <Text mb="xs" color="dark" weight={600}>
                      Gender: {data.pet_gender}
                    </Text>
                    <Text mb="xs" color="dark" weight={600}>
                      Weight: {data.pet_weight}
                    </Text>
                  </div>
                  <Image height={190} width={270} src={data.pet_img} />
                </SimpleGrid>
              </Paper>
            </div>
          </div>
          <div className="resp-form-container">
            <Paper p="xl">
              <Title color="dark">Respond to the request</Title>
              <form action="" onChange={handleChange} onSubmit={handleSubmit}>
                <NumberInput
                  label="Requote base prize"
                  required
                  mb="xl"
                  name="prize"
                  placeholder="Enter your cost"
                />
                <Textarea
                  required
                  mb={40}
                  name="response"
                  label="Enter your response to the request"
                />
                <SimpleGrid cols={2}>
                  <Button color="gray" onClick={() => setReqViewOpen(false)}>
                    Close
                  </Button>
                  <Button type="submit" loading={loading}>Respond</Button>
                </SimpleGrid>
              </form>
            </Paper>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewSitterRequest;
