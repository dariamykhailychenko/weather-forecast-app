import { ICityRequest } from '@/_types/location'
import apiService from './apiService'
import { URLS } from '@/_constants/urls'

const { GET_SEARCH_URL } = URLS

export const searchService = {
  getCities: async (searchQuery: string): Promise<ICityRequest> => {
    try {
      const res = await apiService.get(GET_SEARCH_URL, { params: { q: searchQuery, type: 'like' } })

      return res.data
    } catch (err) {
      console.error(err)

      throw err
    }
  },
}
