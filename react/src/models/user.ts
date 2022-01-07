import { createContext } from 'react'

export const user = {
    userId: "ReactUser",
    email: "reactuser@vueandreact.com"
}

export const UserContext = createContext(user)