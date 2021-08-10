import { useEffect, useState } from 'react'
import { isValidSiteData, sanitizeCart } from '../helpers'
import AppContext, {
  getAppState,
  initialAppContext,
  saveAppState,
} from './AppContext'

const Provider = ({ children }) => {
  const [appState, setAppState] = useState(initialAppContext.appState)
  const { currentCart, siteData } = appState

  useEffect(() => {
    const storedAppState = getAppState()
    if (storedAppState) setAppState({ ...appState, ...storedAppState })
    // saveAppState(initialAppContext.appState) // reset
  }, [])

  // these makes sure the cart persist
  // WARNING: Don't do this all at once with appState, only monitor parts which you want to immediately persist
  useEffect(() => {
    saveAppState({ ...appState, currentCart: sanitizeCart(currentCart) })
  }, [currentCart])

  useEffect(() => {
    if (isValidSiteData(siteData)) saveAppState({ ...appState, siteData })
  }, [siteData])

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {!!children && children}
    </AppContext.Provider>
  )
}

export default Provider
