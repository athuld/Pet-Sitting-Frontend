import { Button, Grid, Paper, Stack, Text } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import Chart from "react-google-charts";

export const data = [
  ["Pet", "Expense"],
  ["Simba", 500],
  ["Whiskers", 250],
];
export const options = {
  title: "Total expenses",
  pieHole: 0.4,
  is3D: false,
};
const ExpenseTab = () => {
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
      <Stack>
        <div style={{ width: "40vw" }}>
          <Paper p="sm">
            <Text>Total Expense: ₹750</Text>
          </Paper>
        </div>
        <Chart
          chartType="PieChart"
          height={300}
          width="40vw"
          data={data}
          options={options}
        />
      </Stack>
    </div>
  );
};

export default ExpenseTab;
