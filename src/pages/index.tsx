import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { TravelTypes } from '@/components/TravelTypes'
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
    </>
  )
}
