import React, { useEffect, useState } from 'react'

export const useLetra = () => {
  const [letra, setLetra] = useState('Inter')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLetra(e.target.value)
  } 
  useEffect(() => {
    document.body.style.fontFamily = letra;
  }, [letra]);
  return {
    handleChange, letra
  }
}
