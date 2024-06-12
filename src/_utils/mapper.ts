import { IWeatherApi } from '@/_types/weather'
import { convertStringToDate, timestampToDate, timestampToDayOfWeek } from './dates'
import { ICityApi } from '@/_types/location'
import { formatHumidity, formatTemp, formatWind } from './mathFormatter'
import { Units } from '@/_types/units'

const mapCityData = (cityList: ICityApi[]) =>
  cityList.map(({ name, id, coord, sys }) => {
    return {
      id,
      label: `${name}, ${sys.country}`,
      lat: coord.lat,
      lon: coord.lon,
      value: id,
    }
  })

const mapWeatherForecastData = (weatherForecastList: IWeatherApi[]) =>
  weatherForecastList.map(({ dt, dt_txt: dateText, main, weather }) => {
    return {
      day: timestampToDayOfWeek(dt),
      date: convertStringToDate(dateText),
      icon: weather[0].icon,
      tempMin: formatTemp(main.temp_min),
      tempMax: formatTemp(main.temp_max),
    }
  })

const mapCurrentWeatherData = (data: IWeatherApi, units?: Units) => {
  return {
    city: data.name,
    currentTemp: formatTemp(data.main.temp),
    tempMin: formatTemp(data.main.temp_min),
    tempMax: formatTemp(data.main.temp_max),
    weatherState: data.weather[0].main,
    icon: data.weather[0].icon,
    date: timestampToDate(data.dt, units),
    conditions: {
      wind: formatWind(data.wind.speed, units),
      humidity: formatHumidity(data.main.humidity),
    },
  }
}

export { mapCityData, mapWeatherForecastData, mapCurrentWeatherData }
