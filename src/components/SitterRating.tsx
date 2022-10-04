import { Avatar, Grid, Modal, Textarea, Text, Button } from "@mantine/core";
import { useState } from "react";
import StarRatings from "react-star-ratings";

const SitterRating = ({ isOpen, setIsOpen }: any) => {
  const [rating, setRating] = useState();

  const handleRatingChange = (newRating: any) => {
    setRating(newRating);
  };

  return (
    <>
      <Modal
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        title="Rate Sitter"
      >
        <Grid mb="md">
          <Grid.Col ml="lg" span={4}>
            <Avatar
              radius={100}
              size="xl"
              src="http://res.cloudinary.com/athuld/image/upload/v1663013144/mnjzutozezlm6mntjztl.jpg"
            />
          </Grid.Col>
          <Grid.Col span={6} style={{ display: "grid", placeItems: "center" }}>
            <Text size="lg">Abishek Arun</Text>
            <Text>Phone: 8847551255</Text>
          </Grid.Col>
        </Grid>
        <div style={{marginLeft:"2em"}}>
          <StarRatings
            rating={rating}
            starRatedColor="blue"
            changeRating={handleRatingChange}
            numberOfStars={5}
            name="Rating"
          />
        </div>
        <Textarea required label="Write your review" m="md" />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={()=>setIsOpen(false)} mr="md" color="gray">
            Close
          </Button>
          <Button mr="md">Submit</Button>
        </div>
      </Modal>
    </>
  );
};

export default SitterRating;
