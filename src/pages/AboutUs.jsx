import { Box, Text } from '@chakra-ui/react';

function AboutUs() {
  return (
    <Box p={5}>
      <Text fontSize="xl">About Us</Text>
      <Text mt={3}>
        Welcome to our website. Here you can find information about our company and services.
      </Text>
    </Box>
  );
}

export default AboutUs;