import { useContext } from 'react'
import AppContext from '../../contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'

const CartFAB = () => {
  const { appState, setAppState } = useContext(AppContext)
  const { currentCart } = appState

  if (!currentCart) return <></>

  const { products } = currentCart

  const quantity =
    products.length > 0
      ? products
          .map((v) => v.quantity)
          .reduce((a, b) => parseInt(`${a}`) + parseInt(`${b}`))
      : 0
  return (
    <div className='fixed bg-green-300 right-10 bottom-12 shadow-lg rounded-full flex justify-center items-center border-1'>
      {quantity > 0 && (
        <span className='absolute -top-2 -left-2 bg-red-500 rounded-full text-white p-1 px-1.5'>
          {quantity}
        </span>
      )}
      <Tippy content='View Cart'>
        <button
          onClick={() =>
            setAppState({
              ...appState,
              currentCart: { ...currentCart, modalVisible: true },
            })
          }
        >
          <FontAwesomeIcon icon={faShoppingCart} size='2x' className='m-5' />
        </button>
      </Tippy>
    </div>
  )
}

export default CartFAB
