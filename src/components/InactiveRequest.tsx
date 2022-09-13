import { Paper, Image, Text, Grid, Chip } from "@mantine/core";

const InactiveRequest = ({request}:any) => {
    return (
        <div>
      <Paper withBorder mb="md" mt="md" shadow="md" px={30} py={10}>
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
          <Grid.Col style={{display:"grid",placeItems:"center"}} span={2}>
            <Chip color="gray" variant="filled">Inactive</Chip>
          </Grid.Col>
          <Grid.Col style={{display:"grid",placeItems:"center"}} span={4}>
            <div className="sitter-req-card-details">
              <Text size="md" color="dimmed" weight={500}>
                Sitter: {request.name}
              </Text>
              <Text size="md" color="dimmed" weight={500}>
                Phone: {request.phone}
              </Text>
              <Text size="md" color="dimmed" weight={500}>
                Pincode: {request.pincode}
              </Text>
            </div>
          </Grid.Col>
        </Grid>
      </Paper>
               
        </div>
    )
}

export default InactiveRequest

