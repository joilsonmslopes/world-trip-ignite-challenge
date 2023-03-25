import request, { ResponseInterceptor } from '@/helpers/request'
import { Continent } from '@/types'

export type ContinentType = Pick<
  Continent,
  'id' | 'slug' | 'name' | 'description' | 'imageUrl'
>

export const getMostVisitedCitiesInWorld = async () =>
  request().get<unknown, ResponseInterceptor<Continent[]>>('/continents', {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  })
