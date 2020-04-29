import { useState, useEffect } from 'react'
import { RECOMMEND_BASE_URL} from '../../Api'

export const useHomeFetch = () => {
  const [state, setState] = useState({movies: []})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchMovies = async endpoint => {
    setError(false)
    setLoading(true)

    try {
      const result = await (await fetch(endpoint)).json()
      setState(prev => ({
        ...prev,
        movies: [...result.Search]
      }))
    } catch (error) {
      setError(true)
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMovies(RECOMMEND_BASE_URL)
  }, [])

  return [{state, loading, error}, fetchMovies]
}