import { Avatar, Grid, Paper, Stack } from "@mantine/core";
import StarRatings from "react-star-ratings";

const ReviewCard = () => {
  return (
  <div style={{width:"35vw"}}>
    <Paper withBorder px="md" py="md" shadow="md">
      <Grid>
        <Grid.Col span={3}>
          <Avatar
            src="http://res.cloudinary.com/athuld/image/upload/v1663013144/mnjzutozezlm6mntjztl.jpg"
            radius={100}
            size={80}
          />
        </Grid.Col>
        <Grid.Col span={9}>
            <Stack>
                Abhishek Arun
            </Stack>
            <Stack>
                <StarRatings
                starDimension="18px"
                rating={4}
                numberOfStars={5}
                starRatedColor="blue"
                />
            </Stack>
            <Stack>
            This is a test rating to check the rating
            </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  </div>
  );
};

export default ReviewCard;
