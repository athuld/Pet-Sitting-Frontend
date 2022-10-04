import { Paper, Title, Divider } from "@mantine/core";
import PopularSitterCard from "../components/PopularSitterCard";
import { UserNav } from "../components/UserNav";

const PopularSitters = () => {
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
            <PopularSitterCard/>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default PopularSitters;
