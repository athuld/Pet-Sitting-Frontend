import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Container,
  Divider,
} from "@mantine/core";

import { Link, useNavigate } from "react-router-dom";

import HomeImg from "../assets/home.png";
import { registerUser } from "../api/sitterApi";
import { showNotification } from "@mantine/notifications";
import { IconX } from "@tabler/icons";

const Register = () => {
  const [register, setRegister] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<any>) => {
    setRegister((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setLoading(true);
    const status = await registerUser(register);
    if (status === 400) {
      setLoading(false);
      showNotification({
        title: "User Already Exist",
        message: "This User already exist in the system",
        color: "red",
        icon: <IconX />,
      });
    }
    if (status === 200) {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <div style={{ width: "40vw"}}>
        <Paper ml="lg" p="md" radius={30} withBorder shadow="md">
          <h1 className="auth-header">Register Your Account</h1>
        </Paper>
      </div>
      <div className="auth-main">
        <img src={HomeImg} alt="" />
        <Container size={450} my={45}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <TextInput
                label="Email"
                name="email"
                placeholder="you@mantine.dev"
                required
              />
              <TextInput
                label="Username"
                name="username"
                placeholder="Username"
                required
                mt="md"
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                name="password"
                required
                mt="md"
              />
              <Group position="apart" mt="md">
                <span style={{ fontSize: "0.9em" }}>
                  Already have an account?{" "}
                </span>
                <Link style={{ fontSize: "0.9em" }} to={"/"}>
                  Login
                </Link>
              </Group>
              <Button
                loading={loading}
                type="submit"
                color="blue"
                fullWidth
                mt="xl"
              >
                Sign up
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default Register;
