import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'

import { Box, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export const TravelCarousel = () => {
  return (
    <Box
      w="100%"
      maxW={1240}
      h={{ base: '250px', lg: '450px' }}
      mx="auto"
      mb="24px"
      sx={{
        '.swiper-button-next': {
          color: 'yellow.500',
          '&::after': {
            fontSize: { base: '24px', lg: '32px' },
          },
        },
        '.swiper-button-prev': {
          color: 'yellow.500',
          '&::after': {
            fontSize: { base: '24px', lg: '32px' },
          },
        },
        '.swiper-pagination-bullet': {
          background: 'gray.300',
          '&.swiper-pagination-bullet-active': {
            background: 'yellow.500',
          },
        },
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        history
        color="yellow.500"
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade"
        centeredSlides
        breakpoints={{
          760: {
            height: 450,
          },
          0: {
            height: 250,
          },
        }}
      >
        <SwiperSlide>
          <ChakraLink as={Link} passHref href="/north-american">
            <Image
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1240&q=80"
              alt="North American"
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
            />
          </ChakraLink>
        </SwiperSlide>

        <SwiperSlide>
          <ChakraLink as={Link} passHref href="/south-american">
            <Image
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5vcnRoZXJuJTIwYW1lcmljYXxlbnwwfHwwfHw%3D&auto=format&w=1240&q=60"
              alt="South American"
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
            />
          </ChakraLink>
        </SwiperSlide>

        <SwiperSlide>
          <ChakraLink as={Link} passHref href="/asia">
            <Image
              src="https://images.unsplash.com/photo-1513415564515-763d91423bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QXNpYXxlbnwwfHwwfHw%3D&auto=format&w=1240&q=60"
              alt="Asia"
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
            />
          </ChakraLink>
        </SwiperSlide>

        <SwiperSlide>
          <ChakraLink as={Link} passHref href="/africa">
            <Image
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhfGVufDB8fDB8fA%3D%3D&auto=format&w=1240&q=60"
              alt="Africa"
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
            />
          </ChakraLink>
        </SwiperSlide>

        <SwiperSlide>
          <ChakraLink as={Link} passHref href="/europe">
            <Image
              src="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8RXVyb3BlfGVufDB8fDB8fA%3D%3D&auto=format&w=1240&q=60"
              alt="Europe"
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
            />
          </ChakraLink>
        </SwiperSlide>

        <SwiperSlide>
          <ChakraLink as={Link} passHref href="/oceania">
            <Image
              src="https://images.unsplash.com/photo-1546268060-2592ff93ee24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Oceania"
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
            />
          </ChakraLink>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
