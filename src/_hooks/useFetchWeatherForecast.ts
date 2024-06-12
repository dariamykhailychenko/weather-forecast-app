import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { COMMON } from '@/_constants/common'
import { weatherForecastService } from '@/_services/api/weatherForecastService'
import { ICoord } from '@/_types/location'
import { Units } from '@/_types/units'
import { IWeatherForecast } from '@/_types/weather'
import { mapWeatherForecastData } from '@/_utils/mapper'

const { MIDDAY } = COMMON

export const useFetchWeatherForecast = (cord: ICoord, units?: Units) => {
  const [loading, setLoading] = useState(false)
  const [weatherForecast, setWeatherForecast] = useState<IWeatherForecast[]>([])

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      try {
        setLoading(true)

        const res = await weatherForecastService.getWeatherForecast({ cord, units })

        if (res && res.list) {
          const data = mapWeatherForecastData(res.list).filter((forecast) => forecast.date.getHours() === MIDDAY)
          setWeatherForecast(data)
        }
      } catch (e) {
        toast.error('Something went wrong!')
      } finally {
        setLoading(false)
      }
    }

    if (cord) {
      fetchWeatherForecast()
    }
  }, [cord.lat, cord.lon, units])

  return { loading, weatherForecast }
}
