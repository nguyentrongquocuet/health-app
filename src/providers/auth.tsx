import { ROUTER_PATHS } from '@app/router/constant'
import { createContext, FC, ReactNode, useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'

interface AuthContext {
  authenticated: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = createContext<AuthContext>({
  authenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: () => {
    console.log('Calling function outside AuthProvider')
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {
    console.log('Calling function outside AuthProvider')
  },
})

const AuthProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  const login = useCallback(() => {
    setIsAuthenticated(true)
    alert('Logged in')
    navigate(ROUTER_PATHS.MyRecords)
  }, [])

  const logout = useCallback(() => {
    setIsAuthenticated(false)
    alert('Logged out')
    navigate(ROUTER_PATHS.ColumnPage)
  }, [])

  const contextValue = useMemo<AuthContext>(
    () => ({
      authenticated: isAuthenticated,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAuthenticated]
  )

  return <AuthContext.Provider value={contextValue}> {children}</AuthContext.Provider>
}

export default AuthProvider
