import { Button, Grid, Loader, Paper, Stack, Text, Title } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import { getCustomEarnings, getGeneralEarnings } from "../api/sitterApi";

const EarningsTab = () => {
  const [earningsData, setEarningsData] = useState<any>();
  const [rangeData, setRangeData] = useState({});

  const {  isLoading, isError } = useQuery(
    ["general_earnings"],
    getGeneralEarnings,
    { retry: false, onSuccess: (data) => setEarningsData(data) }
  );

  const getCustom = useMutation(getCustomEarnings, {
    onSuccess: (data: any) => {
      setEarningsData(data);
    },
    onError: () => {
      setEarningsData(0);
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

  return (
    <div style={{ width: "60vw", height: "50vh" }}>
    <form onSubmit={handleSubmit}>
      <Grid>
          <Grid.Col span={4}>
            <DatePicker
              mb="sm"
              placeholder="From date"
              label="From date"
              onChange={(e) => handleChange(e, "from_date")}
              name="date"
              required
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <DatePicker
              mb="sm"
              placeholder="To date"
              onChange={(e) => handleChange(e, "to_date")}
              label="To date"
              name="date"
              required
            />
          </Grid.Col>
          <Grid.Col span={2} style={{ display: "grid", placeItems: "center" }}>
            <Button type="submit" mt="sm">Generate</Button>
          </Grid.Col>
      </Grid>
      </form>
      <div style={{ width: "40vw" }}>
        <Paper withBorder shadow="md" p="lg">
          <Stack>
            {isLoading ? (
              <div style={{ textAlign: "center" }}>
                <Loader variant="bars" />
              </div>
            ) : isError || earningsData === 0 ? (
              <Text
                mt={50}
                size={20}
                align="center"
                weight={600}
                color="dimmed"
              >
                You don't have any earnings
              </Text>
            ) : (
              <>
                <Text>
                  Number of transactions: {earningsData?.transaction_count}
                </Text>
                <Title>Total Earnings: ₹{earningsData?.total_amount}</Title>
              </>
            )}
          </Stack>
        </Paper>
      </div>
    </div>
  );
};

export default EarningsTab;
