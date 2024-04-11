import { useEffect, useState } from "react";
import { getCount } from "../API Service/apiService";
import { Box, Heading, useToast } from "@chakra-ui/react";

const SecondComponents = () => {
  const toast = useToast();
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const handleCount = async () => {
    try {
      const countData = await getCount();
      setAddCount(countData.addCount);
      setUpdateCount(countData.updateCount);
    } catch (error) {
      toast({
        title: "There is some issue on getting count",
        description: error,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    handleCount();
  }, []);

  return (
    <Box
      style={{ backgroundColor: "papayawhip", height: "100%", padding: "15px" }}
    >
      <Heading>Window 2</Heading>

      <Heading as="h4" size="md" mt="40px">
        Add Count: {addCount}, Update Count: {updateCount}
      </Heading>
    </Box>
  );
};

export default SecondComponents;
