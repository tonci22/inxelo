import { React, useState } from "react";
import Box from "@mui/material/Box";
import CustomTextInput from "../Fields/CustomTextInput.tsx";
import CustomButton from "../Fields/CustomButton.tsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  localStorage.setItem("authenticated", "false");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);

  const users = [{ username: "Ante", password: "test" }];

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const account = users.find((user) => user.username === username);

    if (account && account.password === password) {
      setAuthenticated(true);
      localStorage.setItem("authenticated", "true");
      navigate("/dashboard");
    } 

    setUsername("");
    setPassword("");
  };

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={formSubmitHandler}>
      <CustomTextInput
        type="text"
        value={username}
        label="Username"
        onChange={(event) => setUsername(event.target.value)}
      ></CustomTextInput>
      <CustomTextInput
        type="password"
        value={password}
        label="Password"
        onChange={(event) => setPassword(event.target.value)}
      ></CustomTextInput>
      <CustomButton type="submit">LOGIN</CustomButton>
    </Box>
  );
};

export default Login;
