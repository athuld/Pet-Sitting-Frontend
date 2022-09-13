import { Tabs, Text, Button, SimpleGrid, Loader } from "@mantine/core";
import { PetCard } from "../components/PetCard";
import "../styles/user-dashboard.css";
import { useState } from "react";
import AddPet from "./AddPet";
import SitterReq from "./SitterReq";
import { useQuery } from "@tanstack/react-query";
import { getPetDetails } from "../api/sitterApi";

const TabSection = ({ userData, isUserLoading }: any) => {
  const [opened, setOpened] = useState(false);
  const {
    data: petData,
    isLoading: isPetLoading,
    isError,
  } = useQuery(["pet"], getPetDetails, { retry: false });
  return (
    <div className="tab-container">
      <AddPet opened={opened} setOpened={setOpened} />
      <Tabs defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first">
            <Text color="dark" weight={600} size={20}>
              Owner Dashboard
            </Text>
          </Tabs.Tab>
          <Tabs.Tab disabled={!userData?.is_petsitter} value="second">
            <Text color="dark" weight={600} size={20}>
              Sitter Dashboard
            </Text>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first" pt="xs">
          <Button
            disabled={petData?.length >= 4 ? true : false}
            onClick={() => setOpened(true)}
            mb={30}
          >
            Add a pet
          </Button>
          {isPetLoading ? (
            <div style={{ textAlign: "center" }}>
              <Loader variant="bars" />
            </div>
          ) : isError ? (
            <Text mt={100} size={20} align="center" weight={600} color="dimmed">
              No pets added. Click on 'Add Pet' to add a pet
            </Text>
          ) : (
            <SimpleGrid cols={4} spacing={28}>
              {petData?.map((pet: any) => (
                <PetCard pet={pet} />
              ))}
            </SimpleGrid>
          )}
        </Tabs.Panel>
        <Tabs.Panel value="second" pt="xs">
          {isUserLoading ? null : <SitterReq userData={userData} />}
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default TabSection;
