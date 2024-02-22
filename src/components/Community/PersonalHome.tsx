import React from 'react';
import { Button, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { FaReddit } from 'react-icons/fa';

const PersonalHome: React.FC = () => {
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      position="sticky"
    >
      <Flex direction="column" p="12px">
        <Flex align="center" mb={2}>
          {/* <Icon as={FaReddit} fontSize={50} color="brand.100" mr={2} /> */}
          <Text fontWeight={600}>Home</Text>
        </Flex>
        <Stack spacing={3}>
          <Text fontSize="9pt">Your personal Filmspace</Text>
          <Button height="30px">Create Post</Button>
          <Button variant="outline" height="30px">
            Create Community
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
