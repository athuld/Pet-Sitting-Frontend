import { Button, Text, Divider, Loader, Modal, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getReviewsForSitterById } from "../api/sitterApi";
import AddSitterRequest from "./AddSitterRequest";
import PopularSitterProfile from "./PopularSitterProfile";
import ReviewCard from "./ReviewCard";

const ViewPopularSitter = ({
  openView,
  setOpenView,
  data,
  userId,
}: any) => {
  const {
    data: reviewData,
    isLoading: reviewLoading,
    isError: reviewError,
  } = useQuery(
    ["reviewData", data.sitter_id],
    () => getReviewsForSitterById(data.sitter_id),
    { retry: false }
  );

  const [opened, setOpened] = useState(false);
  {console.log(userId)}
  return (
    <Modal fullScreen opened={openView} onClose={() => setOpenView(false)}>
      <AddSitterRequest opened={opened} setOpened={setOpened} is_personal={true} />
      <div
        style={{
          width: "95vw",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ width: "60rem" }}>
          <PopularSitterProfile data={data} />
          {
          userId === data.sitter_id ? null : (
            <Button my="lg" onClick={() => setOpened(true)}>
              Make a request
            </Button>
          )}
          <Title color="dimmed">Recent Reviews</Title>
          <Divider mb="lg" />
          {reviewLoading ? (
            <div style={{ textAlign: "center" }}>
              <Loader variant="bars" />
            </div>
          ) : reviewError ? (
            <Text mt={50} size={20} align="center" weight={600} color="dimmed">
              You don't have any reviews
            </Text>
          ) : (
            <>
              {reviewData?.map((review: any) => {
                return <ReviewCard review={review} />;
              })}
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ViewPopularSitter;
