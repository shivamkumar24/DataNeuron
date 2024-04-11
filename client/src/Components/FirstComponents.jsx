import { useState } from "react";
import { addData } from "../API Service/apiService";
import { Box, Input, Button, Heading, useToast } from "@chakra-ui/react";

const FirstComponents = () => {
  const toast = useToast();
  const [title, setTitle] = useState("");

  const handleAdd = async () => {
    try {
      await addData({ title });
      setTitle("");
      toast({
        title: "Task added",
        description: "We've created your task for you.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "There is some issue on create task",
        description: error,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
      />

      <Button onClick={handleAdd}>Add Task</Button>
    </Box>
  );
};

export default FirstComponents;
