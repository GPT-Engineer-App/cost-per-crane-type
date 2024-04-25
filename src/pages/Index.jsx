import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Select, Input, Button, Text, VStack, useToast, Checkbox, HStack } from "@chakra-ui/react";

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
  const [includeIVA, setIncludeIVA] = useState(false);
  const [dieselCost, setDieselCost] = useState("");
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
    let baseCost = calculateCost(craneType, parseFloat(distance));
    let totalCost = baseCost;

    if (includeIVA) {
      const iva = baseCost * 0.16;
      const totalWithIVA = totalCost + iva;
      setTotalCost({ baseCost: baseCost.toFixed(2), iva: iva.toFixed(2), totalWithIVA: totalWithIVA.toFixed(2), dieselCost: dieselCost });
    } else {
      setTotalCost({ baseCost: baseCost.toFixed(2), totalCost: totalCost.toFixed(2), dieselCost: dieselCost });
    }
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

          <FormControl>
            <Checkbox isChecked={includeIVA} onChange={(e) => setIncludeIVA(e.target.checked)}>
              Include IVA (16%)
            </Checkbox>
          </FormControl>
          <Button type="submit" colorScheme="blue" width="100%">
            Calculate Cost
          </Button>
        </VStack>
      </form>
      {totalCost && (
        <Box mt={8} textAlign="center">
          <Text fontSize="2xl">Base Cost:</Text>
          <HStack>
            <Text fontSize="2xl">Base Cost:</Text>
            <Text fontSize="2xl" fontWeight="bold">
              ${totalCost.baseCost}
            </Text>
          </HStack>
          {totalCost.dieselCost && (
            <HStack>
              <Text fontSize="2xl">Diesel Cost:</Text>
              <Text fontSize="2xl" fontWeight="bold">
                ${totalCost.dieselCost}
              </Text>
            </HStack>
          )}
          <HStack>
            <Text fontSize="2xl">Total Cost:</Text>
            <Text fontSize="2xl" fontWeight="bold">
              ${totalCost.totalCost}
            </Text>
          </HStack>
          {includeIVA && (
            <>
              <Text fontSize="2xl" mt={4}>
                IVA (16%):
              </Text>
              <Text fontSize="4xl" fontWeight="bold">
                ${totalCost.iva}
              </Text>
              <Text fontSize="2xl" mt={4}>
                Total with IVA:
              </Text>
              <Text fontSize="4xl" fontWeight="bold">
                ${totalCost.totalWithIVA}
              </Text>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Index;
