import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { weatherForecastService } from '@/_services/api/weatherForecastService'
import { Units } from '@/_types/units'
import { IWeatherCurrent } from '@/_types/weather'
import { mapCurrentWeatherData } from '@/_utils/mapper'

export const useFetchCurrentWeather = (id?: number, units?: Units) => {
  const [loading, setLoading] = useState(false)
  const [currentWeather, setCurrentWeather] = useState<Nullable<IWeatherCurrent>>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        const data = await weatherForecastService.getCurrentWeatherByCityId({ id, units })

        const weather = mapCurrentWeatherData(data, units)
        setCurrentWeather(weather)
      } catch (e) {
        toast.error('Something went wrong!')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchWeather()
    }
  }, [id, units])

  return { loading, currentWeather }
}
