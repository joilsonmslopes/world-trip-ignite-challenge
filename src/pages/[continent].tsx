import { Description } from '@/components/continent/Description'
import { Hero } from '@/components/continent/Hero'
import { Header } from '@/components/Header'
import { mostVisitedCities } from '@/database/db'
import {
  City,
  Continent as ContinentType,
  Country,
  getMostVisitedCitiesInWorld,
} from '@/services/continentService'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

interface ContinentProps {
  continentParam?: string
  continent: ContinentType
  countries: Country[]
  cities: City[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ContinentProps> = async ctx => {
  const continentParam = ctx.params?.continent as string

  const { data } = await getMostVisitedCitiesInWorld()

  const continent = data.filter(item => item.slug === continentParam)[0]

  let cities: City[] = []

  continent.countries.forEach(country =>
    country.cities.forEach(city => cities.push(city)),
  )

  return {
    props: {
      continent,
      countries: continent.countries,
      cities,
    },
  }
}

export default function Continent({
  continent,
  cities,
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const mostVisitedCitiesInWorld = cities
    .map(city => {
      return mostVisitedCities.includes(city.name) ? city.name : null
    })
    .filter(item => item)

  return (
    <>
      <Head>
        <title>Continente: {continent.name}</title>
      </Head>
      <Header hasButton linkTo="/" />
      <Hero name={continent.name} imageUrl={continent.imageUrl} />
      <Description
        continent={continent}
        mostVisitedCitiesInWorld={mostVisitedCitiesInWorld as string[]}
      />
    </>
  )
}
