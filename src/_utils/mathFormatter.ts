import { Units } from '@/_types/units'

const formatTemp = (temp: number) => Math.round(temp) + '°'

const formatWind = (wind: number, units = Units.METRIC) => {
  const currentUnit = units === Units.METRIC ? 'km/h' : 'mph'

  return Math.round(wind) + currentUnit
}

const formatHumidity = (humidity: number) => Math.round(humidity) + '%'

export { formatTemp, formatWind, formatHumidity }
