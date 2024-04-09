import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Select, Input, Button, Text, VStack, useToast } from "@chakra-ui/react";

const costs = {
  A: { costPerKm: 18.82, baseCost: 528.69 },
  B: { costPerKm: 20.62, baseCost: 607.43 },
  C: { costPerKm: 23.47, baseCost: 721.79 },
  D: { costPerKm: 32.35, baseCost: 885.84 },
};

const calculateCost = (type, distance) => {
  const { costPerKm, baseCost } = costs[type];
  return baseCost + costPerKm * distance;
};

const Index = () => {
  const [craneType, setCraneType] = useState("");
  const [distance, setDistance] = useState("");
  const [totalCost, setTotalCost] = useState(null);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!craneType || !distance) {
      toast({
        title: "Error",
        description: "Please select a crane type and enter a distance.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const cost = calculateCost(craneType, parseFloat(distance));
    setTotalCost(cost.toFixed(2));
  };

  return (
    <Box maxWidth="500px" margin="auto" mt={8} p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Crane Cost Calculator
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="craneType">
            <FormLabel>Select Crane Type</FormLabel>
            <Select placeholder="Select crane type" value={craneType} onChange={(e) => setCraneType(e.target.value)}>
              <option value="A">Type A</option>
              <option value="B">Type B</option>
              <option value="C">Type C</option>
              <option value="D">Type D</option>
            </Select>
          </FormControl>
          <FormControl id="distance">
            <FormLabel>Enter Distance (km)</FormLabel>
            <Input type="number" placeholder="Enter distance" value={distance} onChange={(e) => setDistance(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="100%">
            Calculate Cost
          </Button>
        </VStack>
      </form>
      {totalCost && (
        <Box mt={8} textAlign="center">
          <Text fontSize="2xl">Total Cost:</Text>
          <Text fontSize="4xl" fontWeight="bold">
            ${totalCost}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Index;
