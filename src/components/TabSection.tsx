import { Tabs, Text, Button, Grid, SimpleGrid, Title } from "@mantine/core";
import { PetCard } from "../components/PetCard";
import "../styles/user-dashboard.css";
import { useState } from "react";
import AddPet from "./AddPet";
import SitterReq from "./SitterReq";

const TabSection = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="tab-container">
      <AddPet opened={opened} setOpened={setOpened} />
      <Tabs defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first">
            <Text color="dark" weight={600} size={20}>
              Pet Dashboard
            </Text>
          </Tabs.Tab>
          <Tabs.Tab value="second">
            <Text color="dark" weight={600} size={20}>
              Sitter Dashboard
            </Text>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first" pt="xs">
          <Button onClick={() => setOpened(true)} mb={30}>
            Add a pet
          </Button>
          <SimpleGrid cols={4} spacing={28}>
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
          </SimpleGrid>
        </Tabs.Panel>
        <Tabs.Panel value="second" pt="xs">
            <SitterReq />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default TabSection;
