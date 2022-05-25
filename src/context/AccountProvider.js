import React, { createContext, useState } from 'react'

export const AccountContext = createContext(null)

function AccountProvider({ children }) {
  const [clicked, setClicked] = useState(false)
  const [user, setUser] = useState(false)
  return (
    <AccountContext.Provider
      value={{
        clicked,
        setClicked,
        user,
        setUser,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider
