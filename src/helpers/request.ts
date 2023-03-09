import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

export type ResponseInterceptor<T> = {
  success: boolean
  error?: AxiosError
} & AxiosResponse<T>

export const request = (
  errorMessage: string | false = 'Erro ao carregar dados',
) => {
  const axiosRequest = axios.create()

  axiosRequest.interceptors.response.use(
    response => {
      return { ...response, success: true }
    },
    error => {
      if (errorMessage) {
        console.log(`error: ${errorMessage}`)
      }

      return { success: false, error }
    },
  )

  return axiosRequest as AxiosInstance
}

export default request
