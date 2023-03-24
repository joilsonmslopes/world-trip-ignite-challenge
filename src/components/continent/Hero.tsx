import { Box, Image, Text } from '@chakra-ui/react'

interface HeroProps {
  name: string
  imageUrl: string
}

export const Hero = ({ name, imageUrl }: HeroProps) => {
  return (
    <Box position="relative">
      <Image
        src={imageUrl}
        alt={name}
        w="100%"
        h={{ base: 250, md: 450 }}
        objectFit="cover"
      />
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        bg="blackAlpha.500"
        zIndex={49}
        top={0}
        left={0}
        px="140px"
        py="60px"
        display="flex"
        alignItems={{ base: 'center', md: 'flex-end' }}
        justifyContent={{ base: 'center', md: 'initial' }}
      >
        <Text
          mt={{ base: '0', md: 'auto' }}
          color="white"
          fontSize={{ base: '1.75rem', md: '5xl' }}
          fontWeight={600}
        >
          {name}
        </Text>
      </Box>
    </Box>
  )
}
