import {
  Modal,
  Paper,
  SimpleGrid,
  Title,
  Text,
  Image,
  Loader,
  Button,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { deleteRequestById, getResponsesById } from "../api/sitterApi";
import ResponseUserCard from "./ResponseUserCard";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons";

const ViewSitterResponse = ({ resViewOpen, setResViewOpen, data }: any) => {
  const {
    data: responseData,
    isLoading,
    isError,
  } = useQuery(
    ["reponse-by-id", data.req_id],
    () => getResponsesById(data.req_id),
    { retry: false }
  );
  const queryClient = useQueryClient();
  const deleteRequest = useMutation(deleteRequestById, {
    onSuccess: () => {
      setResViewOpen(false);
      showNotification({
        title: "Request Deleted",
        message: "Request has been deleted",
        color: "red",
        icon: <IconCheck />,
      });
      queryClient.invalidateQueries(["active_reqs"]);
    },
  });

  return (
    <>
      <Modal
        opened={resViewOpen}
        onClose={() => setResViewOpen(false)}
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
                <Button
                  onClick={() => deleteRequest.mutate(data.req_id)}
                  color="red"
                >
                  Delete Request
                </Button>
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
          <div className="responses-container">
            <Paper p="xl">
              <Title align="center" color="dark">
                Responses
              </Title>
              {isLoading ? (
                <div style={{ textAlign: "center" }}>
                  <Loader variant="bars" />
                </div>
              ) : isError ? (
                <Text
                  mt={50}
                  size={20}
                  align="center"
                  weight={600}
                  color="dimmed"
                >
                  You don't have any responses yet
                </Text>
              ) : (
                responseData?.map((response: any) => {
                  return (
                    <ResponseUserCard
                      data={response}
                      petData={data}
                      setOpen={setResViewOpen}
                    />
                  );
                })
              )}
            </Paper>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewSitterResponse;
