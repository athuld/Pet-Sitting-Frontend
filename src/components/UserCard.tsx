import { Avatar, Paper, Text } from "@mantine/core";
import "../styles/user-dashboard.css"

const UserCard = () => {
  return (
    <div className="u-card-main">
      <Paper withBorder shadow="lg" px={50} py={40}>
        <div className="u-card-container">
          <Avatar size={160} radius="xl"/>
          <Text size={30} color="dark" weight={600} mt="md">Athul Dinesan</Text>
          <Text size="lg" color="dimmed" weight={500} mt="md">Age: 23</Text>
          <Text size="lg" color="dimmed" weight={500} mt="md">Gender: Male</Text>
          <Text size="lg" color="dimmed" weight={500} mt="md" >Address: Maniyakuzhi</Text>
          <Text size="lg" color="dimmed" weight={500} mt="md" >Pincode: 682006</Text>
          <Text size="lg" color="dimmed" weight={500} mt="md">Phone: 9995774987</Text>
        </div>
      </Paper>
    </div>
  );
};

export default UserCard;
