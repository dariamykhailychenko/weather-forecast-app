import { ISys } from './weather'

export interface ICity {
  id: number
  label: string
  value: number
  lat?: number
  lon?: number
}

export interface ICoord {
  lon?: number
  lat?: number
}

export interface ICityApi {
  coord: ICoord
  name: string
  id: number
  country: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
  sys: ISys
}

export interface ICityRequest {
  list: ICityApi[]
}
