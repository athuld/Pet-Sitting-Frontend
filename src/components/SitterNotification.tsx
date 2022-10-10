import { Avatar, Text, Grid, Paper, Chip } from '@mantine/core'

const SitterNotification = ({request}:any) => {
    return (
    <div className="owner-noti-card">
      <Paper withBorder shadow="md" p="md" mb="md">
        <Grid>
          <Grid.Col span={2} style={{display:"grid",placeItems:"center"}}>
              <Avatar
                radius={100}
                size="xl"
                src={request.pet_img}
              />
          </Grid.Col>
          <Grid.Col span={3}>
            <Text color="dark">
                Date: {request.date}
            </Text>
            <Text color="dark">
                Time: {request.time}
            </Text>
            <Text color="dark">
                Cost: {request.prize}
            </Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text color="dark">
                Owner: {request.name}
            </Text>
            <Text color="dark">
                Phone: {request.phone}
            </Text>
            <Text color="dark">
                Address: {request.address},{request.pincode}
            </Text>
          </Grid.Col>
          <Grid.Col span={2} style={{display:"grid",placeItems:"center"}}>
            <Chip color="green" checked>Accepted</Chip> 
          </Grid.Col>
        </Grid>
      </Paper>
    </div>
    )
}

export default SitterNotification

