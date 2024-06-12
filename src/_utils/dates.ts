import { Units } from '@/_types/units'

const timestampToDayOfWeek = (timestamp: number) => {
  const milliseconds = timestamp * 1000
  const date = new Date(milliseconds)
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return days[date.getUTCDay()]
}

const timestampToDate = (timestamp: number, units?: Units) => {
  const date = new Date(timestamp * 1000)
  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
  const timeOptions = {
    hour: 'numeric' as const,
    minute: 'numeric' as const,
    hour12: units === Units.IMPERIAL,
  }
  const time = date.toLocaleTimeString('en-US', timeOptions)
  const formattedDate = `${dayOfWeek} ${time}`
  return formattedDate
}

const convertStringToDate = (dateTxt: string) => {
  const [year, month, day, hour, minute, second] = dateTxt.split(/[\s:-]/).map(Number)
  return new Date(year, month - 1, day, hour, minute, second)
}

export { convertStringToDate, timestampToDayOfWeek, timestampToDate }
