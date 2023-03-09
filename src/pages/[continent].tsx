import { Country, getCountriesByContinent } from '@/services/restCountries'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

interface ContinentProps {
  continent?: string
  countries: Country[] | null
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<ContinentProps> = async ctx => {
  const continent = ctx.params?.continent as string

  const { success, data } = await getCountriesByContinent(continent)

  const countries: Country[] | null = success
    ? data.map(country => ({
        name: country.name,
        flag: country.flag,
        translations: country.translations,
        region: country.region,
      }))
    : null

  return {
    props: {
      continent,
      countries,
    },
  }
}

export default function Continent({
  continent,
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(continent)

  return (
    <ul>
      {countries?.map(country => (
        <li key={country.flag}>
          <strong>{country.name}</strong>
        </li>
      ))}
    </ul>
  )
}
