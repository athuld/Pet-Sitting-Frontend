import { Avatar, Button, Grid, Loader, Paper, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getReviewForOwner } from "../api/sitterApi";
import SitterRating from "./SitterRating";
import ViewReview from "./ViewReview";

const OwnerNotification = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false)
  const {
    data: reviewData,
    isLoading,
    isError,
  } = useQuery(
    ["review_owner", data.req_id],
    () => getReviewForOwner(data.sitter_id),
    { retry: false }
  );

  return (
    <>
      <SitterRating isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      <ViewReview isOpen={reviewOpen} setIsOpen={setReviewOpen} data={reviewData}/>
      <div className="owner-noti-card">
        <Paper p="md" mb="md">
          <Grid>
            <Grid.Col
              span={4}
              style={{ display: "grid", placeItems: "center" }}
            >
              <Avatar.Group>
                <Avatar radius={100} size="xl" src={data.pet_img} />
                <Avatar radius={100} size="xl" src={data.avatar_img} />
              </Avatar.Group>
            </Grid.Col>
            <Grid.Col span={5}>
              <Text color="dimmed">Pet: {data.pet_name}</Text>
              <Text>
                <div className="owner-noti-sitter">
                  Sitter: {data.name}
                  <IconInfoCircle />
                </div>
              </Text>
              <Text color="dimmed">Cost: {data.base_prize}</Text>
            </Grid.Col>
            <Grid.Col
              span={3}
              style={{ display: "grid", placeItems: "center" }}
            >
              {isLoading ? (
                <div style={{ textAlign: "center" }}>
                  <Loader variant="bars" />
                </div>
              ) : isError ? (
                <Button onClick={() => setIsOpen(true)}>Review Sitter</Button>
              ) : (
                <>
                  <Button color="green" onClick={() => setReviewOpen(true)}>
                    View Review
                  </Button>
                </>
              )}
            </Grid.Col>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default OwnerNotification;
