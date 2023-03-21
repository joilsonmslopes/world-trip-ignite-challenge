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

export interface ContinentType {
  id: number
  slug: string
  name: string
  description: string
  numberOfCountries: number
  totalLanguages: number
  countries: Country[]
}

export const getMostVisitedCitiesInWorld = async () =>
  request().get<unknown, ResponseInterceptor<ContinentType[]>>('/continents', {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  })
