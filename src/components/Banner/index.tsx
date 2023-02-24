import { Flex } from '@chakra-ui/react'
import { TextContent } from './TextContent'

import bgImage from 'public/images/background.png'
import { AirplaneImage } from './AirplaneImage'

export const Banner = () => {
  return (
    <Flex
      bgImage={`url(${bgImage.src})`}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="20.93rem"
      px="8.75rem"
      pt="20"
      pb="4.357rem"
      justifyContent="space-between"
    >
      <TextContent />
      <AirplaneImage />
    </Flex>
  )
}
