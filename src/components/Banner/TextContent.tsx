import { Flex, Text, VStack } from '@chakra-ui/react'

export const TextContent = () => {
  return (
    <Flex>
      <VStack spacing="5" align="flex-start">
        <Text
          as="h1"
          maxW={426}
          w="100%"
          fontSize={{ base: 'xl', lg: '4xl' }}
          fontWeight={500}
          lineHeight={{ base: '1.875rem', lg: '3.375rem' }}
          color="gray.50"
        >
          5 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text
          fontSize={{ base: 'sm', lg: 'xl' }}
          color="gray.100"
          lineHeight={{ base: '1.312rem', lg: '1.875rem' }}
          fontWeight={400}
        >
          5 Continentes, infinitas possibilidades.
        </Text>
      </VStack>
    </Flex>
  )
}
