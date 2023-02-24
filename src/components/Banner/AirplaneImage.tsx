import { Image } from '@chakra-ui/react'

import airplaneImg from 'public/airplane.svg'

export const AirplaneImage = () => {
  return (
    <Image as={airplaneImg} alt="Ilustração de um avião" w="100%" maxW={417} />
  )
}
