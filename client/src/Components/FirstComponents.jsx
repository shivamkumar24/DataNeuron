import axios from "axios";
import React, { useState } from "react";
import { Box, Input, Button, Heading, useToast } from "@chakra-ui/react";

const FirstComponents = () => {
  const toast = useToast();
  const [data, setData] = useState("");

  const handleAdd = () => {
    axios
      .post("https://dataneuronbackend-edbc.onrender.com/api/data", {
        action: "add",
        newData: data,
      })
      .then((response) => {
        setData("");
        toast({
          title: response.data.message,
          description: "We've created your data.",
          status: "success",
          duration: 500,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Something went wrong",
          description: error,
          status: "error",
          duration: 500,
          isClosable: true,
        });
      });
  };

  return (
    <Box
      style={{ backgroundColor: "papayawhip", height: "100%", padding: "15px" }}
    >
      <Heading as="h2">Window 1</Heading>
      <Input
        w="70%"
        mt="40px"
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter data"
      />

      <Button onClick={handleAdd}>Add</Button>
    </Box>
  );
};

export default FirstComponents;
