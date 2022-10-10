import {
  Avatar,
  Divider,
  Grid,
  Paper,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import StarRatings from "react-star-ratings";

const PopularSitterProfile = ({data}:any) => {
  return (
    <Paper withBorder px={30} py={20} shadow="lg">
      <Stack>
        <Title color="dimmed">Sitter Details</Title>
        <Divider mb="lg" />
      </Stack>
      <Stack>
        <Grid>
          <Grid.Col style={{ display: "grid", placeItems: "center" }} span={3}>
            <Avatar
              radius={100}
              size={130}
              src={data.avatar_img}
            />
          </Grid.Col>
          <Grid.Col span={5}>
            <Text size={30} color="dark">
              {data.name}
            </Text>
            <Text color="dimmed">Address: {data.address}</Text>
            <Text color="dimmed">Pincode: {data.pincode}</Text>
            <Text color="dimmed">Phone: {data.phone}</Text>
          </Grid.Col>

          <Grid.Col style={{ display: "grid", placeItems: "center" }} span={3}>
            <Stack>
              <Text size={40}>{data.avg_rating}</Text>
            </Stack>
            <Stack>
              <StarRatings
                numberOfStars={5}
                starDimension="20px"
                starRatedColor="green"
                rating={data.avg_rating}
              />
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default PopularSitterProfile;
