import React, { useEffect, useState } from 'react'

export const useSearch = (word: string) => {

  const [data, setData] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        console.log(response)
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
    fetchData()
  }, [word])

  return {
    data,
  }
}
