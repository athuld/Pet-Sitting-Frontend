import { Avatar, Button, Grid, Paper, Stack, Text } from "@mantine/core";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import ViewPopularSitter from "./ViewPopularSitter";

const PopularSitterCard = () => {
    const [openView, setOpenView] = useState(false)

  return (
  <>
  <ViewPopularSitter openView={openView} setOpenView={setOpenView} />
    <Paper withBorder mb="md" shadow="md" px={30} py={10}>
      <Grid>
        <Grid.Col span={2}>
          <Avatar
            radius={100}
            size="xl"
            src="http://res.cloudinary.com/athuld/image/upload/v1663013144/mnjzutozezlm6mntjztl.jpg"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <div>
            <Text size="md" color="dark" weight={500}>
              Abhishek Arun
            </Text>
            <Text size="md" color="dimmed" weight={500}>
              Address: Duke Villa
            </Text>
            <Text size="md" color="dimmed" weight={500}>
              Email: duke@gmail.com
            </Text>
          </div>
        </Grid.Col>
        <Grid.Col style={{ display: "grid", placeItems: "center" }} span={4}>
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
        <Grid.Col style={{ display: "grid", placeItems: "center" }} span={2}>
          <Button onClick={()=>setOpenView(true)}>View</Button>
        </Grid.Col>
      </Grid>
    </Paper>
    </>
  );
};

export default PopularSitterCard;
