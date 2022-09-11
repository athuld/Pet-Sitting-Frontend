import { Paper, Image, Text, SimpleGrid, Grid, Chip, Button } from "@mantine/core";

const ActiveRequest = () => {
  return (
    <div>
      <Paper withBorder shadow="md" px={30} py={10}>
        <Grid>
          <Grid.Col span={2}>
            <Image
              height={75}
              width={75}
              src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              radius="md"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <div className="sitter-req-card-details">
              <Text size="md" color="dimmed" weight={500}>
                Date: 09-12-2022
              </Text>
              <Text size="md" color="dimmed" weight={500}>
                Type: Dog
              </Text>
              <Text size="md" color="dimmed" weight={500}>
                Base Amount: Rs. 500
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col style={{display:"grid",placeItems:"center"}} span={4}>
            <Chip color="green" variant="filled" checked>Active</Chip>
          </Grid.Col>
          <Grid.Col style={{display:"grid",placeItems:"center"}} span={2}>
            <Button>View</Button>
          </Grid.Col>
        </Grid>
      </Paper>
    </div>
  );
};

export default ActiveRequest;
