'use client'

import { FC, useState } from 'react'
import { Select } from '@/_components/common/select'
import { useFetchCities } from '@/_hooks'
import { ISearchCitySelectProps } from './types'

export const SearchCitySelect: FC<ISearchCitySelectProps> = ({ setSelectedCity, selectedCity }) => {
  const [searchCity, setSearchCity] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { loading, cities } = useFetchCities(searchCity)

  const handleSelectResult = (selectedOption) => {
    setSearchCity(selectedOption)
    setIsOpen(true)
  }

  const handleSelectCity = (value) => {
    setSelectedCity(value)
    setIsOpen(false)
  }

  return (
    <Select
      isLoading={loading}
      options={cities}
      value={selectedCity}
      onChange={handleSelectCity}
      onInputChange={handleSelectResult}
      menuIsOpen={searchCity.length > 3 && isOpen}
      placeholder='Search city'
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          primary: 'black',
          neutral0: 'white',
          neutral50: 'black',
          neutral80: 'black',
        },
      })}
    />
  )
}
