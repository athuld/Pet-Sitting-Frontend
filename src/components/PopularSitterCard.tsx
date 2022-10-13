import { Avatar, Button, Grid, Paper, Stack, Text } from "@mantine/core";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import ViewPopularSitter from "./ViewPopularSitter";

const PopularSitterCard = ({data,userId}:any) => {
    const [openView, setOpenView] = useState(false)

  return (
  <>
  <ViewPopularSitter openView={openView} userId={userId} setOpenView={setOpenView} data={data} />
    <Paper withBorder mb="md" shadow="md" px={30} py={10}>
      <Grid>
        <Grid.Col span={2}>
          <Avatar
            radius={100}
            size="xl"
            src={data.avatar_img}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <div>
            <Text size="md" color="dark" weight={500}>
              {data.name}
            </Text>
            <Text size="md" color="dimmed" weight={500}>
              Address: {data.address}
            </Text>
            <Text size="md" color="dimmed" weight={500}>
              Pincode: {data.pincode}
            </Text>
          </div>
        </Grid.Col>
        <Grid.Col style={{ display: "grid", placeItems: "center" }} span={4}>
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
        <Grid.Col style={{ display: "grid", placeItems: "center" }} span={2}>
          <Button onClick={()=>setOpenView(true)}>View</Button>
        </Grid.Col>
      </Grid>
    </Paper>
    </>
  );
};

export default PopularSitterCard;
