import { Button, Loader, Paper, Tabs, Text, Title } from "@mantine/core";
import { IconBook, IconRefresh } from "@tabler/icons";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getActiveRequests, getInActiveRequests } from "../api/sitterApi";
import ActiveRequest from "../components/ActiveRequest";
import AddSitterRequest from "../components/AddSitterRequest";
import InactiveRequest from "../components/InactiveRequest";
import { UserNav } from "../components/UserNav";

import "../styles/find-sitter.css";

const FindSitter = () => {
  const [opened, setOpened] = useState(false);
  const {
    data: activeReqs,
    isLoading,
    isError,
  } = useQuery(["active_reqs"], getActiveRequests, { retry: false });

  const {
    data: inactiveReqs,
    isLoading:inactiveLoading,
    isError:inactiveError,
  } = useQuery(["inactive_reqs"], getInActiveRequests, { retry: false });

  return (
    <>
      <AddSitterRequest opened={opened} setOpened={setOpened} />
      <UserNav activeLink={1} />
      <div className="find-sitter-container">
        <div className="find-sitter-main">
          <Paper px={70} py={50} radius="md" withBorder shadow="md">
            <Title align="center" color="dark">
              Find a sitter near you
            </Title>
            <Tabs radius="md" mt={40} defaultValue="first">
              <Tabs.List position="center">
                <Tabs.Tab
                  icon={<IconRefresh size={20} />}
                  color="green"
                  value="first"
                >
                  <Text size={20} color="dark" weight={500}>
                    Active Requests
                  </Text>
                </Tabs.Tab>
                <Tabs.Tab icon={<IconBook size={20} />} value="second">
                  <Text size={20} color="dark" weight={500}>
                    History
                  </Text>
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="first">
                <Button my={20} onClick={() => setOpened(true)}>
                  Create Request
                </Button>
                {isLoading ? (
                  <div style={{ textAlign: "center" }}>
                    <Loader variant="bars" />
                  </div>
                ) : isError ? (
                  <Text
                    mt={50}
                    size={20}
                    align="center"
                    weight={600}
                    color="dimmed"
                  >
                    You don't have any active requests
                  </Text>
                ) : (
                  <>
                    {activeReqs.data?.map((request: any) => {
                      return <ActiveRequest request={request} />;
                    })}
                  </>
                )}
              </Tabs.Panel>

              <Tabs.Panel value="second">
                {inactiveLoading ? (
                  <div style={{ textAlign: "center" }}>
                    <Loader variant="bars" />
                  </div>
                ) : inactiveError ? (
                  <Text
                    mt={50}
                    size={20}
                    align="center"
                    weight={600}
                    color="dimmed"
                  >
                    You don't have any inactive requests
                  </Text>
                ) : (
                  <>
                    {inactiveReqs.data?.map((request: any) => {
                      return <InactiveRequest request={request} />;
                    })}
                  </>
                )}
              </Tabs.Panel>
            </Tabs>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default FindSitter;
