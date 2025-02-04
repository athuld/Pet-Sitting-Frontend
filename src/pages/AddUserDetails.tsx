import { useState } from "react";
import {
  Paper,
  TextInput,
  Textarea,
  Select,
  NumberInput,
  FileInput,
  Grid,
  Button,
  Avatar,
  Title,
  Switch,
} from "@mantine/core";
import "../styles/user-details.css";
import UploadImg from "../utils/UploadImg";
import { addUserDetails } from "../api/sitterApi";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";
import { useNavigate } from "react-router-dom";

const AddUserDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const [url, setUrl] = useState(
    "http://res.cloudinary.com/athuld/image/upload/v1662833671/frozgkkmynpcxdxpasbi.jpg"
  );
  const [image, setImage] = useState<File | null>();
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<any>) => {
    if (e.target.name === "is_petsitter") {
      setUserDetails((prev) => ({
        ...prev,
        [e.target.name]: e.target.checked,
      }));
    } else if (e.target.inputMode === "numeric") {
      setUserDetails((prev) => ({
        ...prev,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setUserDetails((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };


  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setLoading(true);
    const data: any = { ...userDetails };
    data["gender"] = gender;
    data["avatar_img"] = url;
    const status = await addUserDetails(data);
    if (status === 400) {
      setLoading(false);
      showNotification({
        title: "Error in form data",
        message: "Please check the details",
        color: "red",
        icon: <IconX />,
      });
    } else {
      setLoading(false);
      showNotification({
        title: "Data Added",
        message: "Details had been updated",
        color: "green",
        icon: <IconCheck />,
      });
      setTimeout(() => {
        navigate("/user/dashboard");
      }, 1000);
    }
  };

  return (
    <div className="add-ud-main">
      <div className="add-ud-container">
        <Paper withBorder shadow="md" py={35} px={50} my={60}>
          <Title align="center" mb="lg" color="dark">
            Tell us about yourself
          </Title>
          <form action="" onChange={handleChange} onSubmit={handleSubmit}>
            <TextInput
              label="Full Name"
              required
              name="name"
              placeholder="Enter your name"
              mb="sm"
            />
            <Select
              label="Gender"
              placeholder="Select your gender"
              name="gender"
              required
              value={gender}
              onChange={setGender}
              mb="sm"
              data={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "others", label: "Others" },
              ]}
            />
            <NumberInput
              name="age"
              required
              label="Age"
              placeholder="Enter your age"
              mb="sm"
            />
            <NumberInput
              name="phone"
              required
              label="Phone Number"
              placeholder="Enter your phone number"
              mb="sm"
            />
            <Textarea
              name="address"
              required
              label="Address"
              placeholder="Enter your address"
              mb="sm"
            />
            <NumberInput
              name="pincode"
              required
              label="Pincode"
              placeholder="Enter your pincode"
              mb="md"
            />
            <Switch
              onLabel="yes"
              offLabel="no"
              size="md"
              name="is_petsitter"
              color="green"
              mb="md"
              label="Do you want to be a pet sitter?"
            />
            <Grid grow>
              <Grid.Col span={6}>
                <FileInput
                  name="avatar_img"
                  placeholder="Upload your image"
                  onChange={(e) => setImage(e)}
                />
              </Grid.Col>
              <Grid.Col span={3}>
                <Button onClick={() => UploadImg(image, setUrl)} color="violet">
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
              color={"violet"}
              fullWidth
              mt="xl"
            >
              Add Details
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default AddUserDetails;
