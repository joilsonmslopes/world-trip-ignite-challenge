import { Box, Flex, Image } from '@chakra-ui/react'

import LogoImg from 'public/logo.svg'

export const Header = () => {
  return (
    <Flex justify="center" py={27} px="10" bg="white">
      <Box w={185} h={46}>
        <Image as={LogoImg} alt="World Trip Logo" w="100%" h="100%" />
      </Box>
    </Flex>
  )
}
