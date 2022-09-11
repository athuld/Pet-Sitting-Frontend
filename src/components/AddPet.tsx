import { Avatar, Button, FileInput, Grid, Modal, Select, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import UploadImg from "../utils/UploadImg";

const AddPet = ({opened,setOpened}:any) => {

  const [url, setUrl] = useState(
    "http://res.cloudinary.com/athuld/image/upload/v1662833671/frozgkkmynpcxdxpasbi.jpg"
  );
  const [image, setImage] = useState<File | null>();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add your pet"
        centered
        size="md"
      >
        <form action="">
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
              name="pet_name"
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
                <Button onClick={() => UploadImg(image, setUrl)}>
                  Upload
                </Button>
              </Grid.Col>
              <Grid.Col span={3}>
                <Avatar src={url} radius="lg" />
              </Grid.Col>
            </Grid>
            <Button
              loading={loading}
              type="submit"
              fullWidth
              mt="xl"
            >
              Add Details
            </Button>
        </form>
      </Modal>
    </>
  );
};

export default AddPet;
