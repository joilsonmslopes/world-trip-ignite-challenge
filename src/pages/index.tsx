import { Banner } from '@/components/Banner'
import { CallToAction } from '@/components/CallToAction'
import { Header } from '@/components/Header'
import { ContinentCarousel } from '@/components/ContinentCarousel'
import { TravelTypes } from '@/components/TravelTypes'
import {
  ContinentType,
  getMostVisitedCitiesInWorld,
} from '@/services/continentService'
import { Center, Divider } from '@chakra-ui/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

interface HomeProps {
  continents: ContinentType[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { success, data } = await getMostVisitedCitiesInWorld()

  if (!success) {
    return {
      props: {
        continents: [],
      },
    }
  }

  const continents: ContinentType[] = (data || []).map(continent => ({
    id: continent?.id,
    name: continent?.name,
    slug: continent?.slug,
    description: continent?.description,
    imageUrl: continent?.imageUrl,
  }))

  return {
    props: {
      continents: continents,
    },
  }
}

export default function Home({
  continents,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <meta name="description" content="World Trip" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>World Trip</title>
      </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <Center mx="auto" w="90px">
        <Divider opacity={1} borderColor="gray.700" />
      </Center>
      <CallToAction />
      <ContinentCarousel continents={continents} />
    </>
  )
}
