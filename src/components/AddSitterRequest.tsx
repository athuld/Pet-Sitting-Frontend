import {
  Button,
  Text,
  Loader,
  Modal,
  Select,
  Textarea,
  NumberInput,
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import React, { useState } from "react";
import { addSitterRequest, getPetDetails } from "../api/sitterApi";
import { format } from "date-fns";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons";
import dayjs from "dayjs";

const AddSitterRequest = ({ opened, setOpened,is_personal }: any) => {
  const queryClient = useQueryClient();

  const [loading, setLoading] = useState(false);
  const [reqDetails, setReqDetails] = useState({is_personal:is_personal});
  const [time, setTime] = useState<any>(format(new Date(), "hh:mm aaaa"));
  const [date, setDate] = useState<any>(format(new Date(), "dd-MM-yyyy"));
  const [petId, setPetId] = useState<any>();

  const {
    data: petData,
    isLoading,
    isError,
  } = useQuery(["pet"], getPetDetails, {
    retry: false,
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    if (e.target.inputMode === "numeric") {
      setReqDetails((prev) => ({
        ...prev,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setReqDetails((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const addRequest = useMutation(addSitterRequest, {
    onSuccess: () => {
      setLoading(false);
      setOpened(false);
      showNotification({
        title: "Request Added",
        message: "Request had been added successfully",
        color: "green",
        icon: <IconCheck />,
      });
      queryClient.invalidateQueries(["active_reqs"]);
    },
  });

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setLoading(true);
    const data: any = { ...reqDetails };
    data["pet_id"] = parseInt(petId);
    data["date"] = date;
    data["time"] = time;
    addRequest.mutate(data);
  };

  const petArray: any = [];

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create a new request"
      centered
      size="md"
    >
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <Loader variant="bars" />
        </div>
      ) : isError ? (
        <Text mt={100} size={20} align="center" weight={600} color="dimmed">
          You don't have any pet's to make request
        </Text>
      ) : (
        <form action="" onChange={handleChange} onSubmit={handleSubmit}>
          {petData?.map((pet: any) => {
            petArray.push({ value: String(pet.id), label: pet.pet_name });
          })}
          <Select
            label="Select your pet"
            placeholder="Select your pet type"
            name="pet_id"
            required
            value={petId}
            onChange={setPetId}
            mb="sm"
            data={petArray}
          />
          <DatePicker
            mb="sm"
            onChange={(e: any) => setDate(format(e, "yyyy-MM-dd"))}
            placeholder="Select your date"
            label="Date of sitting"
            name="date"
            required
            minDate={new Date()}
          />
          <TimeInput
            label="Pick time"
            format="12"
            required
            onChange={(e: any) => setTime(format(e, "hh:mm aaaa"))}
            name="time"
            defaultValue={new Date()}
            mb="sm"
          />
          <NumberInput
            name="base_prize"
            required
            label="Base Prize"
            placeholder="Enter your base prize"
            mb="sm"
          />
          <Textarea
            name="instructions"
            required
            label="Instructions to follow"
            placeholder="Enter your instructions"
            mb="sm"
          />

          <Button loading={loading} type="submit" fullWidth mt="xl">
            Create Request
          </Button>
        </form>
      )}
    </Modal>
  );
};

export default AddSitterRequest;
