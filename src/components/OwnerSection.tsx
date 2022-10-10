import { Loader, Tabs,Text } from "@mantine/core"
import { IconCurrencyRupee, IconNotification, IconPaw } from "@tabler/icons"
import { useQuery } from "@tanstack/react-query"
import { getInActiveRequests } from "../api/sitterApi"
import ExpenseTab from "./ExpenseTab"
import OwnerNotification from "./OwnerNotification"
import PetsTab from "./PetsTab"

const OwnerSection = () => {
  const {
    data,
    isLoading,
    isError
  } = useQuery(["inactive_reqs"], getInActiveRequests, { retry: false });

    return (
    <Tabs color="dark" variant="pills" radius="md" defaultValue="pets">
      <Tabs.List>
        <Tabs.Tab value="pets" icon={<IconPaw size={17} />}>
        <Text size={14}>
            Pets
        </Text>
        </Tabs.Tab>
        <Tabs.Tab value="notifications" icon={<IconNotification size={19} />}>Notifications</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconCurrencyRupee size={19} />}>Expenses</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="pets" pt="xs">
      <PetsTab/>
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
                      return <OwnerNotification data={request} />;
                    })}
                  </>
                )}
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        <ExpenseTab/>
      </Tabs.Panel>
    </Tabs>
    )
}

export default OwnerSection

