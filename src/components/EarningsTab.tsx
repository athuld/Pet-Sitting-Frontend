import { Button, Grid, Paper, Stack, Text, Title } from "@mantine/core"
import { DatePicker } from "@mantine/dates"

const EarningsTab = () => {
    return (
    <div style={{ width: "60vw", height: "50vh" }}>
      <Grid>
        <Grid.Col span={4}>
          <DatePicker
            mb="sm"
            placeholder="From date"
            label="From date"
            name="date"
            required
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <DatePicker
            mb="sm"
            placeholder="To date"
            label="To date"
            name="date"
            required
          />
        </Grid.Col>
        <Grid.Col span={2} style={{ display: "grid", placeItems: "center" }}>
          <Button mt="sm">Generate</Button>
        </Grid.Col>
      </Grid>
      <div style={{width:"40vw"}}>
      <Paper withBorder shadow="md" p="lg">
      <Stack>
      <Text>Number of transactions: 4</Text>
      <Title>Total Earnings: ₹2000</Title>
      </Stack>
      </Paper>
      </div>
    </div>
    )
}

export default EarningsTab

