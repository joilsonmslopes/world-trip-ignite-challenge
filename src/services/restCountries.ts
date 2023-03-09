import request, { ResponseInterceptor } from '@/helpers/request'

interface Translation {
  br: string
  pt: string
  nl: string
  hr: string
  fa: string
  de: string
  es: string
  fr: string
  ja: string
  it: string
  hu: string
}

export interface Country {
  name: string
  translations: Translation
  flag: string
  region: string
}

export const getCountriesByContinent = (continent: string) =>
  request().get<unknown, ResponseInterceptor<Country[]>>(
    `/region/${continent}`,
    {
      baseURL: process.env.NEXT_PUBLIC_REST_COUNTRIES_API,
    },
  )
