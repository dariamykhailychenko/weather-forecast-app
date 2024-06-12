import { ICity } from '@/_types/location'

export interface ISearchCitySelectProps {
  setSelectedCity: (city: ICity) => void
  selectedCity: Nullable<ICity>
}
