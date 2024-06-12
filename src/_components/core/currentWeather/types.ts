import { ICity } from '@/_types/location'
import { Units } from '@/_types/units'

export interface ICurrentWeatherProps {
  unit: Units
  setUnit: (init: Units) => void
  selectedCity: ICity
}
