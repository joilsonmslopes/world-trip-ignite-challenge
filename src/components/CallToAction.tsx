import { Box, Text } from '@chakra-ui/react'

export const CallToAction = () => {
  return (
    <Box py={{ base: '6', md: '3.25rem' }} px="9">
      <Text fontSize={{ base: 'xl', md: '4xl' }} textAlign="center">
        Vamos nessa?
      </Text>
      <Text fontSize={{ base: 'xl', md: '4xl' }} textAlign="center">
        Então escolha seu continente
      </Text>
    </Box>
  )
}
