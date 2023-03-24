import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper'

import { Box, Image, Link as ChakraLink, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { ContinentType } from '@/services/continentService'

interface ContinentCarouselProps {
  continents: ContinentType[]
}

export const ContinentCarousel = ({ continents }: ContinentCarouselProps) => {
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
        {continents.map(continent => {
          const descriptionSplitted = continent.description.split(' ')

          return (
            <SwiperSlide key={continent.slug}>
              <ChakraLink as={Link} passHref href={continent.slug}>
                <Box
                  position="absolute"
                  left="50%"
                  top="50%"
                  transform={{
                    base: 'translateY(-28px) translateX(-50%)',
                    md: 'translateY(-32px) translateX(-50%)',
                  }}
                  textAlign="center"
                  color="white"
                  zIndex={50}
                >
                  <VStack spacing={{ base: 3, md: 4 }}>
                    <Text
                      as="h2"
                      fontWeight={700}
                      fontSize={{ base: '2xl', md: '3xl' }}
                    >
                      {continent.name}
                    </Text>
                    <Text as="span" fontSize={{ base: 'sm', md: '2xl' }} mt="4">
                      {descriptionSplitted.slice(0, 8).join(' ')} ...
                    </Text>
                  </VStack>
                </Box>
                <Image
                  src={continent.imageUrl}
                  alt={continent.name}
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
          )
        })}
      </Swiper>
    </Box>
  )
}
