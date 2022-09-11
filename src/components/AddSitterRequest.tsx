import { Button, Modal, Select, Textarea } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { useState } from "react";

const AddSitterRequest = ({ opened, setOpened }: any) => {
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create a new request"
      centered
      size="md"
    >
      <form action="">
        <Select
          label="Select your pet"
          placeholder="Select your pet type"
          name="pet_id"
          required
          mb="sm"
          data={[
            { value: "dog", label: "Dog" },
            { value: "cat", label: "Cat" },
            { value: "others", label: "Others" },
          ]}
        />

        <DatePicker
          mb="sm"
          placeholder="Select your date"
          label="Date of sitting"
          name="date"
          required
        />
        <TimeInput
          label="Pick time"
          format="12"
          required
          defaultValue={new Date()}
          mb="sm"
        />
        <Textarea
          name="instructions"
          required
          label="Instructions to follow"
          placeholder="Enter your instructions"
          mb="sm"
        />

        <Button  loading={loading} type="submit" fullWidth mt="xl">
          Create Request
        </Button>
      </form>
    </Modal>
  );
};

export default AddSitterRequest;
