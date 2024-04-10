import axios from "axios";
import React, { useState, useRef } from "react";
import {
  Box,
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

const SecondComponents = () => {
  const toast = useToast();
  const [updatedData, setUpdatedData] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);

  const handleUpdate = () => {
    axios
      .post("http://localhost:2700/api/data", {
        action: "update",
        newData: updatedData,
      })
      .then((response) => {
        setUpdatedData("");
        toast({
          title: response.data.message,
          description: "We've updated your data.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Something went wrong",
          description: error,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });

    onclose;
  };

  return (
    <Box
      style={{ backgroundColor: "papayawhip", height: "100%", padding: "15px" }}
    >
      <Heading>Window 2</Heading>
      <Button mt="40px" onClick={onOpen}>
        Update
      </Button>
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

export default SecondComponents;
