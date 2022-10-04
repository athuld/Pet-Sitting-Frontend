import { Tabs, Text, } from "@mantine/core";
import "../styles/user-dashboard.css";
import OwnerSection from "./OwnerSection";
import SitterReq from "./SitterReq";
import SitterSection from "./SitterSection";

const TabSection = ({ userData, isUserLoading }: any) => {
  return (
    <div className="tab-container">
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
        <OwnerSection/>
        </Tabs.Panel>
        <Tabs.Panel value="second" pt="xs">
          {isUserLoading ? null : <SitterSection userData={userData} />}
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default TabSection;
