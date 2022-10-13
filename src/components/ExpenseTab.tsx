import { Button, Grid, Loader, Paper, Stack, Text } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import Chart from "react-google-charts";
import { getCustomExpense, getGeneralExpense } from "../api/sitterApi";

const ExpenseTab = () => {
  const [chartData, setChartData] = useState<any>();
  const [rangeData, setRangeData] = useState({});

  const {
    data: expenseData,
    isLoading,
    isError,
  } = useQuery(["general_expense"], getGeneralExpense, {
    retry: false,
    onSuccess: () => {
      setChartData(expenseData);
    },
  });

  const getCustom = useMutation(getCustomExpense, {
    onSuccess: (data: any) => {
      setChartData(data);
    },
    onError: () => {
      setChartData(0);
    },
  });

  const handleChange = (e: any, name: string) => {
    setRangeData((prev) => ({
      ...prev,
      [name]: format(e, "yyyy-MM-dd"),
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    getCustom.mutate(rangeData);
  };

  let dataC = [["Pet", "Expense"]];
  let totalExpense = 0;
  const options = {
    title: "Total expenses",
  };

  return (
    <div style={{ width: "60vw", height: "50vh" }}>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid.Col span={4}>
            <DatePicker
              mb="sm"
              onChange={(e) => handleChange(e, "from_date")}
              placeholder="From date"
              label="From date"
              name="from_date"
              required
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <DatePicker
              mb="sm"
              onChange={(e) => handleChange(e, "to_date")}
              placeholder="To date"
              label="To date"
              name="to_date"
              required
            />
          </Grid.Col>
          <Grid.Col span={2} style={{ display: "grid", placeItems: "center" }}>
            <Button type="submit" mt="sm">
              Generate
            </Button>
          </Grid.Col>
        </Grid>
      </form>
      <Stack>
        {isLoading ? (
          <div style={{ textAlign: "center" }}>
            <Loader variant="bars" />
          </div>
        ) : isError || chartData === 0 ? (
          <Text mt={50} size={20} align="center" weight={600} color="dimmed">
            You don't have any expense report
          </Text>
        ) : (
          <>
            {chartData?.forEach((item: any) => {
              dataC.push([item["pet_name"], item["expense"]]);
              totalExpense += item["expense"];
            })}
            <div style={{ width: "40vw" }}>
              <Paper p="sm">
                <Text>Total Expense: ₹{totalExpense}</Text>
              </Paper>
            </div>
            <Chart
              chartType="PieChart"
              width={"40vw"}
              height={"18vw"}
              loader={<Loader variant="bars" />}
              data={dataC}
              options={options}
              rootProps={{ "data-testid": "1" }}
            />
          </>
        )}
      </Stack>
    </div>
  );
};

export default ExpenseTab;
