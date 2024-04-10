import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";

const ThirdComponents = () => {
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const handleCount = () => {
    axios
      .get("https://dataneuronbackend-edbc.onrender.com/api/count")
      .then((response) => {
        setAddCount(response.data.addCount);
        setUpdateCount(response.data.updateCount);
      })
      .catch((error) => {
        console.error("Error fetching counts:", error);
      });
  };

  useEffect(() => {
    handleCount();
  }, []);

  return (
    <Box
      style={{ backgroundColor: "papayawhip", height: "100%", padding: "15px" }}
    >
      <Heading>Window 3</Heading>

      <Heading as="h4" size="md" mt="40px">
        Add Count: {addCount}, Update Count: {updateCount}
      </Heading>
    </Box>
  );
};

export default ThirdComponents;
