import { Paper, Title, Text, Divider, Loader } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getAllReviews, getUserDetails } from "../api/sitterApi";
import PopularSitterCard from "../components/PopularSitterCard";
import { UserNav } from "../components/UserNav";

const PopularSitters = () => {
  const { data: userData, isLoading: userLoading } = useQuery(
    ["userData"],
    getUserDetails
  );

  const { data, isLoading, isError } = useQuery(
    ["popular_sitters"],
    getAllReviews,
    { retry: false }
  );

  return (
    <div>
      <UserNav activeLink={2} />
      <div className="find-sitter-container">
        <div className="find-sitter-main">
          <Paper px={70} py={50} radius="md" withBorder shadow="md">
            <Title align="center" color="dark">
              Popular Sitters Near You
            </Title>
            <Divider mb={50} mt="sm" />
            {isLoading && userLoading ? (
              <div style={{ textAlign: "center" }}>
                <Loader variant="bars" />
              </div>
            ) : isError ? (
              <Text
                mt={50}
                size={20}
                align="center"
                weight={600}
                color="dimmed"
              >
                There are no popular sitters
              </Text>
            ) : (
              <>
                {data?.map((review: any, key: any) => {
                  return (
                    <div key={key}>
                      <PopularSitterCard
                        userId={userData?.user_id}
                        data={review}
                      />
                    </div>
                  );
                })}
              </>
            )}
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default PopularSitters;
