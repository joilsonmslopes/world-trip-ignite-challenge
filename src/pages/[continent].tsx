import {
  City,
  ContinentType,
  Country,
  getMostVisitedCitiesInWorld,
} from '@/services/continentService'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

interface ContinentProps {
  continentParam?: string
  continent: ContinentType
  countries: Country[]
  cities: City[]
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
  return (
    <>
      <h1>{continent.name}</h1>
      <h2>{continent.description}</h2>
      <ul>
        {continent.countries?.map((country: Country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </>
  )
}
