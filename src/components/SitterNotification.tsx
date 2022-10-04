import { Avatar, Text, Grid, Paper, Chip } from '@mantine/core'

const SitterNotification = () => {
    return (
    <div className="owner-noti-card">
      <Paper p="md">
        <Grid>
          <Grid.Col span={2} style={{display:"grid",placeItems:"center"}}>
              <Avatar
                radius={100}
                size="xl"
                src="http://res.cloudinary.com/athuld/image/upload/v1662994992/jrndcgqitgt5ye7ipnsz.jpg"
              />
          </Grid.Col>
          <Grid.Col span={3}>
            <Text color="dark">
                Type: Cat
            </Text>
            <Text color="dark">
                Cost: Rs 500
            </Text>
            <Text color="dark">
                Date: 09-12-2022
            </Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text color="dark">
                Owner: Athul
            </Text>
            <Text color="dark">
                Phone: 9985574458
            </Text>
            <Text color="dark">
                Address: Kottayam Ernakulam
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

