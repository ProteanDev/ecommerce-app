import { createContext } from 'react'

export const initialAppContext = {
  appState: {
    siteData: {
      users: [],
      products: [],
      categories: [],
      carts: [],
    },
    currentUser: {},
    currentCart: {
      modalVisible: false,
      products: [],
    },
  },
  setAppState: () => {},
}

const AppContext = createContext(initialAppContext)

export const saveAppState = (appState) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('appState', JSON.stringify(appState))
  }
}

export const getAppState = () =>
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('appState') || '{}')
    : null

export default AppContext
