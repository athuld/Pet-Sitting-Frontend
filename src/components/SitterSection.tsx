import { Loader, Tabs, Text } from "@mantine/core";
import { IconArticle, IconCurrencyRupee, IconNotification, IconPaw } from "@tabler/icons";
import ReviewCard from "./ReviewCard";
import SitterNotification from "./SitterNotification";
import SitterReq from "./SitterReq";
import {useQuery} from "@tanstack/react-query"
import { getAcceptedRequests, getReviewsForSitter } from "../api/sitterApi";
import EarningsTab from "./EarningsTab";

const SitterSection = ({ userData }: any) => {

  const {
    data,
    isLoading,
    isError,
  } = useQuery(["accepted_reqs"], getAcceptedRequests, { retry: false });

  const {
    data:reviewData,
    isLoading:reviewLoading,
    isError:reviewError,
  } = useQuery(["reviewData"],getReviewsForSitter, { retry: false });

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
                    You don't have any new notifications
                  </Text>
                ) : (
                  <>
                    {data.data?.map((request: any) => {
                      return <SitterNotification request={request} />;
                    })}
                  </>
                )}
      </Tabs.Panel>

      <Tabs.Panel value="reviews" pt="xs">
                {reviewLoading ? (
                  <div style={{ textAlign: "center" }}>
                    <Loader variant="bars" />
                  </div>
                ) : reviewError ? (
                  <Text
                    mt={50}
                    size={20}
                    align="center"
                    weight={600}
                    color="dimmed"
                  >
                    You don't have any reviews
                  </Text>
                ) : (
                  <>
                    {reviewData?.map((review: any) => {
                      return <ReviewCard review={review} />;
                    })}
                  </>
                )}
      </Tabs.Panel>

      <Tabs.Panel value="earnings" pt="xs">
        <EarningsTab/>
      </Tabs.Panel>
    </Tabs>
  );
};

export default SitterSection;
