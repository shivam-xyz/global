import React, { createContext, useState } from 'react'

export const myCartContext = createContext()

const Context = ({children}) => {
    const [cart,setCart] = useState([])
  return (
    <myCartContext.Provider value={{cart,setCart}}>{children}</myCartContext.Provider>
  )
}

export default Context