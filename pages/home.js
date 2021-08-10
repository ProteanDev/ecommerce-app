import axios from 'axios'
import Provider from '../contexts/Provider'
import { server } from '../server.config'
import Products from '../components/products'
import Cart from '../components/cart'
import { useEffect } from 'react'
import AppContext, { initialAppContext } from '../contexts/AppContext'
import { useContext } from 'react'
import CartFAB from '../components/cart/CartFAB'

const Wrapper = (props) => {
  const { siteData } = props
  const { appState, setAppState } = useContext(AppContext)

  // useEffect(() => console.log('appState: ', appState), [appState])

  // updates siteData inside context if siteData prop changes
  useEffect(() => {
    setAppState({
      ...appState,
      siteData,
    })
  }, [siteData])

  return (
    <>
      <CartFAB />
      <Products {...props} />
      <Cart {...props} />
    </>
  )
}

const Home = (props) => {
  return (
    <Provider>
      <Wrapper {...props} />
    </Provider>
  )
}

Home.defaultProps = {
  siteData: initialAppContext.appState.siteData,
}

// from here we let the whole component hierchy absorb the data as siteData in props
export const getStaticProps = async () => {
  try {
    const res = await axios(`${server}/api`)
    return {
      props: { siteData: { ...res.data } },
    }
  } catch (error) {
    console.error('error: ', error)
    return {
      props: {},
    }
  }
}

export default Home
