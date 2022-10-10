import { Avatar, Grid, Modal, Textarea, Text, Button } from "@mantine/core";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewReview } from "../api/sitterApi";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons";

const SitterRating = ({ isOpen, setIsOpen, data }: any) => {
  const [rating, setRating] = useState();
  const [reviewData, setReviewData] = useState({ sitter_id: data.sitter_id });
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleRatingChange = (newRating: any) => {
    setRating(newRating);
  };

  const addRating = useMutation(addNewReview, {
    onSuccess: () => {
      setLoading(false);
      setIsOpen(false);
      showNotification({
        title: "Review Added",
        message: "Your review has been submitted",
        color: "green",
        icon: <IconCheck />,
      });
    },
  });

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const postData: any = { ...reviewData };
    postData["rating"] = rating;
    addRating.mutate(postData);
    setLoading(true);
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    setReviewData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
            <Avatar radius={100} size={120} src={data.avatar_img} />
          </Grid.Col>
          <Grid.Col span={6} style={{ display: "grid", placeItems: "center" }}>
            <Text size={25}>{data.name}</Text>
            <Text>Phone: {data.phone}</Text>
            <Text>Address: {data.address}</Text>
            <Text>Pincode: {data.pincode}</Text>
          </Grid.Col>
        </Grid>
        <div style={{ marginLeft: "2em" }}>
          <StarRatings
            rating={rating}
            starRatedColor="blue"
            changeRating={handleRatingChange}
            numberOfStars={5}
            name="Rating"
          />
        </div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <Textarea name="review" required label="Write your review" m="md" />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => setIsOpen(false)} mr="md" color="gray">
              Close
            </Button>
            <Button loading={loading} type="submit" mr="md">
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SitterRating;
