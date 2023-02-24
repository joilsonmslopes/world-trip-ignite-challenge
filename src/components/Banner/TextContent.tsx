import { Flex, Text, VStack } from '@chakra-ui/react'

export const TextContent = () => {
  return (
    <Flex>
      <VStack spacing="5" align="flex-start">
        <Text
          as="h1"
          maxW={426}
          w="100%"
          fontSize="4xl"
          fontWeight={500}
          lineHeight="3.375rem"
          color="gray.50"
        >
          5 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text
          fontSize="xl"
          color="gray.100"
          lineHeight="1.875rem"
          fontWeight={400}
        >
          5 Continentes, infinitas possibilidades.
        </Text>
      </VStack>
    </Flex>
  )
}
