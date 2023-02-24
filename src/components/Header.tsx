import { Box, Flex, Image } from '@chakra-ui/react'

import LogoImg from 'public/logo.png'

export const Header = () => {
  return (
    <Flex justify="center" py={27} px="10" bg="white">
      <Box
        w={{ base: '5.06rem', lg: '11.56rem' }}
        h={{ base: '1.25rem', lg: '2.875rem' }}
      >
        <Image src={LogoImg.src} alt="World Trip Logo" w={'100%'} h={'100%'} />
      </Box>
    </Flex>
  )
}
