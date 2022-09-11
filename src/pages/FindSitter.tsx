import { Button, Paper, Tabs, Text, Title } from "@mantine/core";
import { IconBook, IconRefresh } from "@tabler/icons";
import { useState } from "react";
import ActiveRequest from "../components/ActiveRequest";
import AddSitterRequest from "../components/AddSitterRequest";
import { UserNav } from "../components/UserNav";

import "../styles/find-sitter.css";

const FindSitter = () => {
    
 const [opened, setOpened] = useState(false)

  return (
    <>
    <AddSitterRequest opened={opened} setOpened={setOpened}/>
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
                <Button my={20} onClick={()=>setOpened(true)}>Create Request</Button>
                <ActiveRequest/>
              </Tabs.Panel>
            </Tabs>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default FindSitter;
