import {
  Avatar,
  Divider,
  Grid,
  Modal,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import StarRatings from "react-star-ratings";

const ViewPopularSitter = ({ openView, setOpenView }: any) => {
  return (
    <Modal fullScreen opened={openView} onClose={() => setOpenView(false)}>
      <div
        style={{
          width: "100vw",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ width: "60rem" }}>
          <Paper withBorder px={30} py={20} shadow="lg">
            <Stack>
              <Title color="dimmed">Sitter Details</Title>
              <Divider mb="lg" />
            </Stack>
            <Stack>
              <Grid>
                <Grid.Col
                  style={{ display: "grid", placeItems: "center" }}
                  span={3}
                >
                  <Avatar
                    radius={100}
                    size={130}
                    src="http://res.cloudinary.com/athuld/image/upload/v1663013144/mnjzutozezlm6mntjztl.jpg"
                  />
                </Grid.Col>
                <Grid.Col span={5}>
                  <Text size={30} color="dark">
                    Abhishek Arun
                  </Text>
                  <Text color="dimmed">Address: Duke Villa</Text>
                  <Text color="dimmed">Pincode: 682006</Text>
                  <Text color="dimmed">Phone: 998877854</Text>
                  <Text color="dimmed">Email: duke@gmail.com</Text>
                </Grid.Col>

                <Grid.Col
                  style={{ display: "grid", placeItems: "center" }}
                  span={3}
                >
                  <Stack>
                    <Text size={40}>4.5</Text>
                  </Stack>
                  <Stack>
                    <StarRatings
                      numberOfStars={5}
                      starDimension="20px"
                      starRatedColor="green"
                      rating={4.5}
                    />
                  </Stack>
                </Grid.Col>
              </Grid>
            </Stack>
          </Paper>
        </div>
      </div>
    </Modal>
  );
};

export default ViewPopularSitter;
