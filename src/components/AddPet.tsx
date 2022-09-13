import {
  Avatar,
  Button,
  FileInput,
  Grid,
  Modal,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import UploadImg from "../utils/UploadImg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPetDetails } from "../api/sitterApi";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons";

const AddPet = ({ opened, setOpened }: any) => {
  const queryClient = useQueryClient();

  const [url, setUrl] = useState(
    "http://res.cloudinary.com/athuld/image/upload/v1662833671/frozgkkmynpcxdxpasbi.jpg"
  );
  const [image, setImage] = useState<File | null>();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [petDetails, setPetDetails] = useState({});

  const addPet = useMutation(addPetDetails, {
    onSuccess: () => {
      setLoading(false);
      setOpened(false);
      setType(null);
      setGender(null);
      showNotification({
        title: "Pet Added",
        message: "Pet Detail had been added",
        color: "green",
        icon: <IconCheck />,
      });
      queryClient.invalidateQueries(["pet"]);
    },
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    setPetDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const data: any = { ...petDetails };
    data["pet_gender"] = gender;
    data["pet_img"] = url;
    data["pet_type"] = type;
    addPet.mutate(data);
    setLoading(true);
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add your pet"
        centered
        size="md"
      >
        <form action="" onSubmit={handleSubmit} onChange={handleChange}>
          <TextInput
            label="Pet Name"
            required
            name="pet_name"
            placeholder="Enter your pet's name"
            mb="sm"
          />
          <Select
            label="Pet Type"
            placeholder="Select your pet type"
            name="pet_type"
            value={type}
            onChange={setType}
            required
            mb="sm"
            data={[
              { value: "dog", label: "Dog" },
              { value: "cat", label: "Cat" },
              { value: "others", label: "Others" },
            ]}
          />
          <Select
            label="Pet Gender"
            placeholder="Select your pet's gender"
            name="pet_gender"
            value={gender}
            onChange={setGender}
            required
            mb="sm"
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
          <TextInput
            label="Pet Weight"
            required
            name="pet_weight"
            placeholder="Enter your pet's weight"
            mb="sm"
          />
          <Textarea
            name="pet_desc"
            required
            label="Pet Description"
            placeholder="Enter your pet description"
            mb="sm"
          />

          <Grid>
            <Grid.Col span={6}>
              <FileInput
                required
                name="pet_img"
                placeholder="Upload your image"
                onChange={(e) => setImage(e)}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <Button onClick={() => UploadImg(image, setUrl)}>Upload</Button>
            </Grid.Col>
            <Grid.Col span={3}>
              <Avatar src={url} radius="lg" />
            </Grid.Col>
          </Grid>
          <Button loading={loading} type="submit" fullWidth mt="xl">
            Add Details
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AddPet;
