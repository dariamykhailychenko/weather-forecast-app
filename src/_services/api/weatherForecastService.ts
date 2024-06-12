import { IWeatherApi, IWeatherForecastApi, IWeatherRequestParams } from '@/_types/weather'
import apiService from './apiService'
import { URLS } from '@/_constants/urls'
import { ICoord } from '@/_types/location'
import { Units } from '@/_types/units'

const { GET_CURRENT_WEATHER_URL, GET_WEATHER_FORECAST_URL } = URLS
const { METRIC } = Units

export const weatherForecastService = {
  getCurrentWeatherByCityId: async ({ id, units = METRIC }: IWeatherRequestParams): Promise<IWeatherApi> => {
    try {
      const res = await apiService.get(GET_CURRENT_WEATHER_URL, {
        params: {
          id,
          units,
        },
      })

      return res.data
    } catch (err) {
      console.error(err)

      throw err
    }
  },
  getWeatherForecast: async ({
    cord,
    units = METRIC,
  }: Pick<IWeatherRequestParams, 'units'> & { cord: ICoord }): Promise<IWeatherForecastApi> => {
    try {
      const { lat, lon } = cord
      const res = await apiService.get(GET_WEATHER_FORECAST_URL, {
        params: {
          lat,
          lon,
          units,
        },
      })

      return res.data
    } catch (err) {
      console.error(err)

      throw err
    }
  },
}
