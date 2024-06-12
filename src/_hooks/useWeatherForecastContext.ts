import { useContext, ContextType } from 'react'
import { WeatherForecastContext } from '@/_contexts'

export const useWeatherForecastContext = (): ContextType<typeof WeatherForecastContext> => {
  return useContext(WeatherForecastContext)
}
