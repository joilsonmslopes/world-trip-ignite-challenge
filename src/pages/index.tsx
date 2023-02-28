import { Banner } from '@/components/Banner'
import { CallToAction } from '@/components/CallToAction'
import { Header } from '@/components/Header'
import { TravelCarousel } from '@/components/TravelCarousel'
import { TravelTypes } from '@/components/TravelTypes'
import { Center, Divider } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
        <meta name="description" content="World Trip" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <Center mx="auto" w="90px">
        <Divider opacity={1} borderColor="gray.700" />
      </Center>
      <CallToAction />
      <TravelCarousel />
    </>
  )
}
