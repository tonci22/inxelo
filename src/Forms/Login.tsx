import { React, useState } from "react";
import Box from "@mui/material/Box";
import CustomTextInput from "../Fields/CustomTextInput.tsx";
import CustomButton from "../Fields/CustomButton.tsx";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Card from "../Helpers/Card.tsx";

const Login = () => {
  const navigate = useNavigate();
  localStorage.setItem("authenticated", "false");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);

  const users = [{ username: "admin", password: "admin" }];

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
    <div className={styles.loginBackgroundImage}>
    <Card className={styles.loginFormCentered}>
      <Box component="form" noValidate onSubmit={formSubmitHandler}>
        <div>
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
        </div>
        <CustomButton type="submit">LOGIN</CustomButton>
      </Box>
    </Card>
    </div>
  );
};

export default Login;
