import { ICity } from '@/_types/location'
import { Units } from '@/_types/units'
import { createContext } from 'react'

interface IWeatherForecastContextValue {
  selectedCity: Nullable<ICity>
  unit: Units
  setUnit: (unit: Units) => void
  setSelectedCity: (value: ICity) => void
  hideLoading: () => void
  showLoading: () => void
  isContentLoading: boolean
}

export const WeatherForecastContext = createContext<IWeatherForecastContextValue>({} as IWeatherForecastContextValue)
