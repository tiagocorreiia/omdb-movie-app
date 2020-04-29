import { useState, useEffect, useCallback } from 'react'
import { API_URL, API_KEY } from '../../Api'

export const useMovieFetch = movieId => {
  const [state, setState] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async () => {
    setError(false)
    setLoading(true)

    try {
      const endpoint = `${API_URL}?i=${movieId}&apikey=${API_KEY}`
      const result = await(await fetch(endpoint)).json()

      setState({
        ...result
      })

    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }, [movieId])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [state, loading, error]
}