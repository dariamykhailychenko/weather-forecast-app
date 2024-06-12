import { searchService } from '@/_services/api/searchService'
import { toast } from 'react-toastify'
import { ICity } from '@/_types/location'
import { mapCityData } from '@/_utils/mapper'
import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'
import { COMMON } from '@/_constants/common'

const { DELAY, MIN_SEARCH_LENGTH } = COMMON

export const useFetchCities = (searchQuery: string) => {
  const [loading, setLoading] = useState(false)
  const [cities, setCities] = useState<ICity[]>([])
  const debouncedSearchQuery = useDebounce(searchQuery, DELAY)

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true)

        const res = await searchService.getCities(debouncedSearchQuery)
        if (res && res.list) {
          const data = mapCityData(res.list)
          setCities(data)
        }
      } catch (e) {
        toast.error('Something went wrong!')
      } finally {
        setLoading(false)
      }
    }

    if (debouncedSearchQuery && debouncedSearchQuery.length > MIN_SEARCH_LENGTH) {
      fetchCities()
    } else {
      setCities([])
    }
  }, [debouncedSearchQuery])

  return { loading, cities }
}
