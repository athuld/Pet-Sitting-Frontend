import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Container,
} from "@mantine/core";

import { Link, useNavigate } from "react-router-dom";

import "../styles/auth.css";
import HomeImg from "../assets/home.png";
import { getUserDetails, loginUser } from "../api/sitterApi";
import { showNotification } from "@mantine/notifications";
import { IconX } from "@tabler/icons";

const Login = () => {
  const [login, setLogin] = useState({});
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<any>) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setLoading(true)
    const status = await loginUser(login);
    if (status === 400) {
      setLoading(false)
      showNotification({
        title: "Invalid Credentials",
        message: "The provided credentials are incorrect",
        color: "red",
        icon: <IconX />,
      });
    }
    if (status === 200) {
      const res = await getUserDetails();
      setLoading(false)
      res === 400 ? navigate("/add_details") : navigate("/user/dashboard");
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-header">Login To Your Account</h1>
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
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                name="password"
                mt="md"
              />
              <Group position="apart" mt="md">
                <span style={{ fontSize: "0.9em" }}>
                  Don't have an account?{" "}
                </span>
                <Link style={{ fontSize: "0.9em" }} to={"/register"}>
                  Register
                </Link>
              </Group>
              <Button loading={loading} type="submit" color={"violet"} fullWidth mt="xl">
                Sign in
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default Login;
