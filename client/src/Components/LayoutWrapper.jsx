import React from "react";
import { Resizable } from "re-resizable";
import { Grid, GridItem } from "@chakra-ui/react";
import FirstComponents from "./FirstComponents";
import SecondComponents from "./SecondComponents";
import ThirdComponents from "./ThirdComponents";

const LayoutWrapper = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem colSpan={2}>
        <Resizable
          defaultSize={{ width: "auto", padding: "10px", height: "100%" }}
          style={{ border: "1px solid black" }}
        >
          <FirstComponents />
        </Resizable>
      </GridItem>
      <GridItem colSpan={2}>
        <Resizable
          defaultSize={{ width: "auto", padding: "10px", height: "100%" }}
          style={{ border: "1px solid black" }}
        >
          <SecondComponents />
        </Resizable>
      </GridItem>
      <GridItem colSpan={4}>
        <Resizable
          defaultSize={{ width: "100%", padding: "10px", height: "auto" }}
          style={{ border: "1px solid black", marginTop: "10px" }}
        >
          <ThirdComponents />
        </Resizable>
      </GridItem>
    </Grid>
  );
};

export default LayoutWrapper;
