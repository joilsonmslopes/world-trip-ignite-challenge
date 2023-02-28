import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'

import { Box, Image } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const TravelCarousel = () => {
  return (
    <Box
      w="100%"
      maxW={1240}
      h="450px"
      mx="auto"
      mb="24px"
      sx={{
        '.swiper-button-next': {
          color: 'yellow.500',
        },
        '.swiper-button-prev': {
          color: 'yellow.500',
        },
        '.swiper-pagination-bullet': {
          background: 'gray.300',
          '&.swiper-pagination-bullet-active': {
            background: 'yellow.500',
          },
        },
      }}
      pos="relative"
    >
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        bg="blackAlpha.200"
        zIndex={49}
        top={0}
        left={0}
      />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        color="yellow.500"
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade"
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        height={450}
        centeredSlides
      >
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1240&q=80"
            alt="Northern American"
            w="100%"
            h={450}
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5vcnRoZXJuJTIwYW1lcmljYXxlbnwwfHwwfHw%3D&auto=format&w=1240&q=60"
            alt="Northern American"
            w="100%"
            h={450}
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1513415564515-763d91423bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QXNpYXxlbnwwfHwwfHw%3D&auto=format&w=1240&q=60"
            alt="Northern American"
            w="100%"
            h={450}
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhfGVufDB8fDB8fA%3D%3D&auto=format&w=1240&w=500&q=60"
            alt="Northern American"
            w="100%"
            h={450}
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8RXVyb3BlfGVufDB8fDB8fA%3D%3D&auto=format&w=1240&q=60"
            alt="Northern American"
            w="100%"
            h={450}
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1546268060-2592ff93ee24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Oceania"
            w="100%"
            h={450}
            objectFit="cover"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
