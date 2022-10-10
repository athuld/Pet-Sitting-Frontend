import {
  Avatar,
  Grid,
  Modal,
  Text,
  Button,
  Blockquote,
} from "@mantine/core";
import StarRatings from "react-star-ratings";

const ViewReview = ({ isOpen, setIsOpen, data }: any) => {
  let color: string = "red";
  const rating = data?.rating;
  if (rating === 3) {
    color = "orange";
  } else {
    color = "green";
  }

  return (
    <>
      <Modal
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        title="View Review"
      >
        <Grid mb="md">
          <Grid.Col ml="lg" span={4}>
            <Avatar radius={100} size={120} src={data?.avatar_img} />
          </Grid.Col>
          <Grid.Col span={6} style={{ display: "grid", placeItems: "center" }}>
            <Text size={25}>{data?.name}</Text>
            <Text>Phone: {data?.phone}</Text>
            <Text>Address: {data?.address}</Text>
            <Text>Pincode: {data?.pincode}</Text>
          </Grid.Col>
        </Grid>
        <div style={{ marginLeft: "2em" }}>
          <StarRatings
            rating={data?.rating}
            starRatedColor={String(color)}
            numberOfStars={5}
            name="Rating"
          />
        </div>
        <Blockquote>{data?.review}</Blockquote>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => setIsOpen(false)} mr="md" color="gray">
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ViewReview;
