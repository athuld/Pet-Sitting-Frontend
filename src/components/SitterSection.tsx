import { Tabs, Text } from "@mantine/core";
import { IconArticle, IconCurrencyRupee, IconNotification, IconPaw } from "@tabler/icons";
import ReviewCard from "./ReviewCard";
import SitterNotification from "./SitterNotification";
import SitterReq from "./SitterReq";

const SitterSection = ({ userData }: any) => {
  return (
    <Tabs color="dark" variant="pills" radius="md" defaultValue="requests">
      <Tabs.List>
        <Tabs.Tab value="requests" icon={<IconPaw size={17} />}>
          <Text size={14}>Available Requests</Text>
        </Tabs.Tab>
        <Tabs.Tab value="notifications" icon={<IconNotification size={19} />}>
          Notifications
        </Tabs.Tab>
        <Tabs.Tab value="reviews" icon={<IconArticle size={19} />}>
          Reviews
        </Tabs.Tab>
        <Tabs.Tab value="earnings" icon={<IconCurrencyRupee size={19} />}>
          Earnings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="requests" pt="xs">
        <SitterReq userData={userData} />
      </Tabs.Panel>

      <Tabs.Panel value="notifications" pt="xs">
        <SitterNotification/>
      </Tabs.Panel>

      <Tabs.Panel value="reviews" pt="xs">
      <ReviewCard/>
      </Tabs.Panel>

      <Tabs.Panel value="earnings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
};

export default SitterSection;
