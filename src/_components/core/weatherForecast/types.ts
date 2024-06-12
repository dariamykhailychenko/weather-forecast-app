import { ICity } from '@/_types/location'
import { Units } from '@/_types/units'

export interface IWeatherForecastProps {
  unit: Units
  selectedCity: ICity
}
