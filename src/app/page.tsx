'use client'

import { useState } from 'react'
import { LayoutWrapper } from '@/_components/layout/layout-wrapper'
import { SearchCitySelect } from '@/_components/core/searchCitySelect'
import { CurrentWeather } from '@/_components/core/currentWeather'
import { WeatherForecast } from '@/_components/core/weatherForecast'
import { ICity } from '@/_types/location'
import { Units } from '@/_types/units'

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState<Nullable<ICity>>(null)
  const [unit, setUnit] = useState(Units.METRIC)

  return (
    <LayoutWrapper>
      <SearchCitySelect selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      {selectedCity && (
        <>
          <CurrentWeather setUnit={setUnit} unit={unit} selectedCity={selectedCity} />
          <WeatherForecast unit={unit} selectedCity={selectedCity} />
        </>
      )}
    </LayoutWrapper>
  )
}

export default HomePage
