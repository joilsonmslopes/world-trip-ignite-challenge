import { Box, Flex, Image, Link as ChakraLink, Icon } from '@chakra-ui/react'
import { FiChevronLeft } from 'react-icons/fi'

import LogoImg from 'public/logo.png'
import { FC } from 'react'
import Link from 'next/link'

interface HeaderProps {
  hasButton?: boolean
  linkTo?: string
}

export const Header: FC<HeaderProps> = ({ hasButton, linkTo }) => {
  return (
    <Flex justify="center" py={27} px="10" bg="white" position="relative">
      {hasButton && (
        <Box position="absolute" top="34px" left={10}>
          <ChakraLink
            as={Link}
            href={linkTo}
            passHref
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="8"
            h="8"
          >
            <Icon as={FiChevronLeft} fontSize="lg" boxSize="auto" />
          </ChakraLink>
        </Box>
      )}
      <Box
        w={{ base: '5.06rem', lg: '11.56rem' }}
        h={{ base: '1.25rem', lg: '2.875rem' }}
      >
        <Image src={LogoImg.src} alt="World Trip Logo" w={'100%'} h={'100%'} />
      </Box>
    </Flex>
  )
}
