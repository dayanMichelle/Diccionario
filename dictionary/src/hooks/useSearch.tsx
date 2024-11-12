import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { WordData } from '../types/ResponseType';

export const useSearch = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<WordData | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setData(data[0])

      } catch (error) {
        setData(null)
        console.error('Error fetching the word:', error)
      }
    }
    if (id) {
      fetchData();
    }
  }, [id])

  return {
    data,
  }
}
