import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { TextContent } from './TextContent'

import bgImage from 'public/images/background.png'
import { AirplaneImage } from './AirplaneImage'

export const Banner = () => {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  })
  return (
    <Flex
      bgImage={`url(${bgImage.src})`}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h={{ base: '10.187rem', lg: '20.93rem' }}
      px={{ base: '4', lg: '8.75rem' }}
      pt={{ base: '7', lg: '20' }}
      pb={{ base: '7', lg: '4.357rem' }}
      justifyContent="space-between"
    >
      <TextContent />
      {isWideScreen && <AirplaneImage />}
    </Flex>
  )
}
