import { Flex, Heading, Input, Button, useColorMode } from "@chakra-ui/react";

export default function Home() {
  const { toggleColorMode } = useColorMode;

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="learn@chakra-ui.com"
          // variant="filled"
          mb={3}
          type="email"
        />
        <Input
          placeholder="************"
          // variant="filled"
          mb={6}
          type="password"
        />
        <Button colorScheme="teal">Log in</Button>
      </Flex>
    </Flex>
  );
}
