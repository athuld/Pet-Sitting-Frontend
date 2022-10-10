import { Avatar, Grid, Paper, Stack } from "@mantine/core";
import StarRatings from "react-star-ratings";

const ReviewCard = ({review}:any) => {
  let color: string = "red";
  const rating = review?.rating;
  if (rating === 3) {
    color = "orange";
  } else {
    color = "green";
  }

  return (
  <div style={{width:"35vw"}}>
    <Paper withBorder mb="md" px="md" py="md" shadow="md">
      <Grid>
        <Grid.Col span={3}>
          <Avatar
            src={review?.avatar_img}
            radius={100}
            size={80}
          />
        </Grid.Col>
        <Grid.Col span={9}>
            <Stack>
                {review?.name}
            </Stack>
            <Stack>
                <StarRatings
                starDimension="18px"
                rating={review?.rating}
                numberOfStars={5}
                starRatedColor={color}
                />
            </Stack>
            <Stack>
            {review?.review}
            </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  </div>
  );
};

export default ReviewCard;
