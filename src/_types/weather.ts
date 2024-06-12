import { ICityApi } from './location'
import { Units } from './units'

export interface IWeatherDescription {
  id: number
  main: string
  description: string
  icon: string
}

export interface IMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
}

export interface ISys {
  country: string
  sunrise: number
  sunset: number
}

export interface IWind {
  speed: number
  deg: number
  gust: number
}

export interface IClouds {
  all: number
}

export interface IWeatherApi {
  name?: string
  timezone: number
  visibility: number
  dt_txt: string
  dt: number
  weather: IWeatherDescription[]
  main: IMain
  wind: IWind
  clouds: IClouds
  sys?: ISys
}

export interface IWeatherForecastApi {
  list: IWeatherApi[]
  city: ICityApi
}

export interface IWeather {
  city?: string
  currentTemp: string
  tempMin: string
  tempMax: string
  weatherState: string
  icon: string
}

export interface IConditions {
  wind: string
  humidity: string
}

export interface IWeatherCurrent extends IWeather {
  conditions: IConditions
  date: string
}

export interface IWeatherForecast {
  tempMin: string
  tempMax: string
  icon: string
  day: string
  date: Date
}

export interface IWeatherRequestParams {
  id?: number
  units?: Units
}
