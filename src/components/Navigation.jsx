import { Box, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <Flex as="nav" bg="blue.500" p={4} color="white" justifyContent="space-between">
      <Link as={RouterLink} to="/" p={2}>
        Home
      </Link>
      <Link as={RouterLink} to="/about-us" p={2}>
        About Us
      </Link>
    </Flex>
  );
}

export default Navigation;