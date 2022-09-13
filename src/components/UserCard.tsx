import { Avatar, Loader, Paper, Text } from "@mantine/core";
import "../styles/user-dashboard.css"

const UserCard = ({userData,isLoading}:any) => {
  return (
    <div className="u-card-main">
      <Paper withBorder shadow="lg" px={50} py={40}>
        <div className="u-card-container">
        {isLoading ? (
        <Loader  variant="bars"/>
        ):(
        <>
          <Avatar size={160} src={userData.avatar_img} radius="xl"/>
          <Text size={30} color="dark" weight={600} mt="md">{userData.name}</Text>
          <Text size="lg" color="dimmed" weight={500} mt="md">Age: {userData.age}</Text>
          <Text size="lg" color="dimmed" weight={500} mt="md">Gender: {userData.gender}</Text>
          <Text size="lg" color="dimmed" weight={500} mt="md">Address: {userData.address}</Text>
          <Text size="lg" color="dimmed" weight={500} mt="md">Pincode: {userData.pincode}</Text>
          <Text size="lg" color="dimmed" weight={500} mt="md">Phone: {userData.phone}</Text>
        </>
        )}
        </div>
      </Paper>
    </div>
  );
};

export default UserCard;
