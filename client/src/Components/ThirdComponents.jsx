import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { BASE_URL, updateData } from "../API Service/apiService";

const ThirdComponents = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [todoID, setTodoID] = useState("");
  const [updatedData, setUpdatedData] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/task`);
      const data = await response.json();
      setData(data);
    } catch (err) {
      toast({
        title: "There is some issue on fetching",
        description: err,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  const handleUpdateClick = (id) => {
    setTodoID(id);
    onOpen();
  };

  const handleUpdate = async () => {
    try {
      await updateData({ id: todoID, payload: updatedData });
      fetchData();
      toast({
        title: "Task Updated",
        description: "We've updated your task for you.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "There is some issue on updating",
        description: error,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }

    onclose();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      style={{ backgroundColor: "papayawhip", height: "100%", padding: "15px" }}
    >
      <Heading mb="40px">Window 3</Heading>

      {data?.taskData?.map((el) => (
        <Flex
          w="70%"
          key={el._id}
          m="5px auto"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text mr={"15px"}>{el.title}</Text>
          <Button onClick={() => handleUpdateClick(el._id)}>Update</Button>
        </Flex>
      ))}

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Enter updated Data</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter updated Data"
                onChange={(e) => setUpdatedData(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ThirdComponents;
