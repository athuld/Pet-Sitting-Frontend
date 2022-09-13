import { Paper, Image, Text, Grid, Chip, Button } from "@mantine/core";
import { useState } from "react";
import ViewSitterResponse from "./ViewSitterResponse";

const ActiveRequest = ({request}:any) => {
const [resViewOpen, setResViewOpen] = useState(false)
  return (
    <div>
    <ViewSitterResponse resViewOpen={resViewOpen} setResViewOpen={setResViewOpen} data={request} />
      <Paper withBorder mb="md" shadow="md" px={30} py={10}>
        <Grid>
          <Grid.Col span={2}>
            <Image
              height={75}
              width={75}
              src={request.pet_img}
              radius="md"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <div className="sitter-req-card-details">
              <Text size="md" color="dimmed" weight={500}>
                Date: {request.date}
              </Text>
              <Text size="md" color="dimmed" weight={500}>
                Time: {request.time}
              </Text>
              <Text size="md" color="dimmed" weight={500}>
                Base Amount: Rs. {request.base_prize}
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col style={{display:"grid",placeItems:"center"}} span={4}>
            <Chip color="green" variant="filled" checked>Active</Chip>
          </Grid.Col>
          <Grid.Col style={{display:"grid",placeItems:"center"}} span={2}>
            <Button onClick={()=>setResViewOpen(true)}>View</Button>
          </Grid.Col>
        </Grid>
      </Paper>
    </div>
  );
};

export default ActiveRequest;
