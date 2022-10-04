import { Tabs,Text } from "@mantine/core"
import { IconCurrencyRupee, IconNotification, IconPaw } from "@tabler/icons"
import OwnerNotification from "./OwnerNotification"
import PetsTab from "./PetsTab"

const OwnerSection = () => {

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
        <OwnerNotification/>
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
    )
}

export default OwnerSection

