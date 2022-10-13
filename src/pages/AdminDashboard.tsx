import { Divider, Paper, Stack, Title, Text, Grid } from "@mantine/core";
import { IconArrowsExchange2, IconCurrencyRupee, IconFriends, IconId, IconPaw, IconUsers } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { AdminNav } from "../components/AdminNav";
import "../styles/user-details.css";

const AdminDashboard = () => {
    const navigate = useNavigate()
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <AdminNav activeLabel="Dashboard" />
      <div style={{minWidth:"73vw"}}>
      <Stack>
        <Title mt="md" color="dimmed">
          Admin Dashboard
        </Title>
        <Divider mb="md" />
        <Grid>
          <Grid.Col span={4}>
            <div style={{ minWidth: "15rem" }}>
              <div onClick={()=>navigate("/admin/users")} className="dash-card">
                <IconUsers size={44} />
                <Text size={33}>Users</Text>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div onClick={()=>navigate("/admin/sitters")} style={{ minWidth: "15rem" }}>
              <div className="dash-card">
                <IconFriends size={44} />
                <Text size={32}>Sitters</Text>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div onClick={()=>navigate("/admin/pets")} style={{ minWidth: "15rem" }}>
              <div className="dash-card">
                <IconPaw size={44} />
                <Text size={32}>Pets</Text>
              </div>
            </div>
          </Grid.Col>
        </Grid>
        <Grid mt={30}>
          <Grid.Col span={4}>
            <div onClick={()=>navigate("/admin/requests")} style={{ minWidth: "15rem" }}>
              <div className="dash-card">
                <IconId size={44} />
                <Text size={33}>Requests</Text>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div onClick={()=>navigate("/admin/transactions")} style={{ minWidth: "15rem" }}>
              <div className="dash-card">
                <IconArrowsExchange2 size={44} />
                <Text size={32}>Transactions</Text>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div onClick={()=>navigate("/admin/revenue")} style={{ minWidth: "15rem" }}>
              <div className="dash-card">
                <IconCurrencyRupee size={44} />
                <Text size={32}>Revenue</Text>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Stack>
</div>
    </div>
  );
};

export default AdminDashboard;
