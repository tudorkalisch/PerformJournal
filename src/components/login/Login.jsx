import React, { useState } from "react";
import regeneratorRuntime from "regenerator-runtime";
import { Button, Flex, Heading, TextField, View } from "@adobe/react-spectrum";
import loginUser from "../../service/login";

export const Login = ({ setToken }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  };

  return (
    <Flex
      direction="column"
      gap="size-100"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <View
        borderWidth="thin"
        borderColor="dark"
        borderRadius="medium"
        padding="size-250"
      >
        <Flex direction="column" gap="size-100" alignItems="center">
          <Heading level={2}>Perform Journal</Heading>
          <TextField label="User" onChange={setUserName} />
          <TextField type="password" label="Password" onChange={setPassword} />
          <Button variant="cta" onPress={handleLogin}>Login</Button>
        </Flex>
      </View>
    </Flex>
  );
};
