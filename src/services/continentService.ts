import request, { ResponseInterceptor } from '@/helpers/request'

export interface City {
  id: number
  name: string
  imageURL: string
}

export type Country = {
  flag: string
  cities: City[]
} & Pick<City, 'id' | 'name'>

export interface Continent {
  id: number
  slug: string
  name: string
  description: string
  imageUrl: string
  numberOfCountries: number
  totalLanguages: number
  countries: Country[]
}

export type ContinentType = Pick<
  Continent,
  'id' | 'slug' | 'name' | 'description' | 'imageUrl'
>

export const getMostVisitedCitiesInWorld = async () =>
  request().get<unknown, ResponseInterceptor<Continent[]>>('/continents', {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  })
