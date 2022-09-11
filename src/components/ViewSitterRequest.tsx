import { Modal, Paper, SimpleGrid, Image, Text, Title, TextInput, NumberInput, Textarea, Button } from "@mantine/core";

const ViewSitterRequest = ({ reqViewOpen, setReqViewOpen }: any) => {
  return (
    <>
      <Modal
        opened={reqViewOpen}
        onClose={() => setReqViewOpen(false)}
        fullScreen
      >
        <div className="view-modal-container">
          <div>
            <div className="view-modal-req">
              <Paper withBorder shadow="md" ml="xl" mb="md" p="xl">
                <Title mb="sm" color="dimmed">
                  Request Details
                </Title>
                <Text mb="xs" color="dark" weight={600}>
                  Date: 05-12-1998
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Time: 05:00 PM
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Base Prize: Rs.500
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Instructions: Please take care of dog
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Address: Maniyakuzhi
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Pincode: 682006
                </Text>
                <Text mb="xs" color="dark" weight={600}>
                  Phone: 9995774987
                </Text>
              </Paper>
            </div>
            <div className="view-modal-req">
              <Paper withBorder shadow="md" ml="xl" p="xl">
                <SimpleGrid cols={2}>
                  <div>
                    <Title mb="sm" color="dimmed">
                      Pet Details
                    </Title>
                    <Text mb="xs" color="dark" weight={600}>
                      Name: Toby
                    </Text>
                    <Text mb="xs" color="dark" weight={600}>
                      Type: Dog
                    </Text>
                    <Text mb="xs" color="dark" weight={600}>
                      Gender: Male
                    </Text>
                    <Text mb="xs" color="dark" weight={600}>
                      Weight: 5kg
                    </Text>
                  </div>
                  <Image
                    height={190}
                    width={270}
                    src="https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                  />
                </SimpleGrid>
              </Paper>
            </div>
          </div>
          <div className="resp-form-container">
            <Paper p="xl">
            <Title color="dark">Respond to the request</Title>
                <form action="">
                    <NumberInput label="Requote base prize" required mb="xl" placeholder="Enter your cost"/>
                    <Textarea required mb={40} label="Enter your response to the request"/>
                    <SimpleGrid cols={2}>
                        <Button color="gray" onClick={()=>setReqViewOpen(false)}>Close</Button>
                        <Button>Respond</Button>
                    </SimpleGrid>
                </form>
            </Paper>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewSitterRequest;
