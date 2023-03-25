import { CitiesGalery } from '@/components/continent/CitiesGalery'
import { Description } from '@/components/continent/Description'
import { Hero } from '@/components/continent/Hero'
import { Header } from '@/components/Header'
import { mostVisitedCities } from '@/database/db'
import { getMostVisitedCitiesInWorld } from '@/services/continentService'
import { City, Continent as ContinentType, Country } from '@/types'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

interface ContinentProps {
  continentParam?: string
  continent: ContinentType
  countries: Country[]
  mostVisitedCitiesInWorld: (string | null)[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
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

  const mostVisitedCitiesInWorld: (string | null)[] = cities
    ?.map(city => {
      return mostVisitedCities.includes(city.name) ? city.name : null
    })
    .filter(item => item)

  return {
    props: {
      continent,
      countries: continent.countries,
      mostVisitedCitiesInWorld,
    },
  }
}

export default function Continent({
  continent,
  mostVisitedCitiesInWorld,
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = `Continente: ${continent?.name}`

  return (
    <>
      <Head>
        <meta name="description" content="Página do continente" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Header hasButton linkTo="/" />
      <Hero name={continent?.name} imageUrl={continent?.imageUrl} />
      <Description
        continent={continent}
        mostVisitedCitiesInWorld={mostVisitedCitiesInWorld as string[]}
      />
      <CitiesGalery countries={countries} />
    </>
  )
}
