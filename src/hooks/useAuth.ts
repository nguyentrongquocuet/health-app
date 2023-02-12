import { AuthContext } from '@app/providers/auth'
import { useContext } from 'react'

export const useAuth = () => useContext(AuthContext)
