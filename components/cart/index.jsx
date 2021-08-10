import { useContext } from 'react'
import AppContext, { initialAppContext } from '../../contexts/AppContext'
import ModalView from '../ModalView'
import { isValidSiteData, sanitizeCart } from '../../helpers'
import ReceiptBox from './ReceiptBox'
import CartItem from './CartItem'

const CartView = ({
  products,
  modalVisible,
  onModalHide,
  setQuantity,
  removeItem,
  checkout,
}) => {
  const subtotal =
    products.length > 0
      ? products
          .map((v) => parseFloat(v.price * v.quantity))
          .reduce((a, b) => parseFloat(a + b))
          .toFixed(2)
      : 0.0

  // TODO: Must came from somewhere in the future
  const discounts = 0.01
  const taxes = 0.08
  const taxable = subtotal - subtotal * discounts
  const total = (taxable + taxable * taxes).toFixed(2)

  const calculations = {
    subtotal,
    discounts,
    taxes,
    total,
  }

  return (
    <ModalView modalVisible={modalVisible} onModalHide={onModalHide}>
      <div className='sm:px-0 md:px-10 lg:px-10'>
        {products.length === 0 && (
          <p className='px-10 text-lg text-center'>
            You don't have any items in your cart, try adding some
          </p>
        )}
        {products.length > 0 &&
          products.map((product, i) => (
            <CartItem
              key={i}
              {...product}
              setQuantity={setQuantity}
              removeItem={removeItem}
            />
          ))}
        {products.length > 0 && (
          <ReceiptBox
            {...calculations}
            onCheckout={() => checkout({ products })}
          />
        )}
      </div>
    </ModalView>
  )
}

const getProductsData = (
  source = [],
  sourceKey = 'id',
  matchers = [],
  matchersKey = 'productId',
) => {
  const added = []
  matchers.forEach((c) => {
    const data = source.find((p) => p[`${sourceKey}`] === c[`${matchersKey}`])
    if (data) added.push({ ...data, cartItemId: c.id, quantity: c.quantity })
  })

  return added
}

const Cart = ({ siteData }) => {
  const { appState, setAppState } = useContext(AppContext)
  const { currentCart } = appState

  // checks if our saved state has valid siteData to hydrate our components, otherwise, we'll just use the latest prop
  const { products: allProducts } = isValidSiteData(appState.siteData)
    ? appState.siteData
    : siteData

  const { products: cartProducts, modalVisible } = currentCart

  const setQuantity = (cartItemId, quantity) => {
    const finalCartProducts = cartProducts.map((v) => {
      if (v.id === cartItemId) return { ...v, quantity }
      return v
    })
    setAppState({
      ...appState,
      siteData,
      currentCart: sanitizeCart({
        ...currentCart,
        products: [...finalCartProducts],
      }),
    })
  }

  const removeItem = (cartItemId) => {
    setAppState({
      ...appState,
      siteData,
      currentCart: sanitizeCart({
        ...currentCart,
        products: [...cartProducts.filter((v) => v.id !== cartItemId)],
      }),
    })
  }

  const checkout = (cart) => {
    if (window) {
      alert(
        `${cart.products.length} items in cart about to be checked out.\nEnd of Demo.\nplease contact dev.chris.dp@gmail.com to know more`,
      )
    }
  }

  const operations = {
    setQuantity,
    removeItem,
    checkout,
  }

  return (
    <>
      <CartView
        modalVisible={modalVisible}
        onModalHide={() =>
          setAppState({
            ...appState,
            currentCart: { ...currentCart, modalVisible: false },
          })
        }
        products={getProductsData(allProducts, 'id', cartProducts, 'productId')}
        {...operations}
      />
    </>
  )
}

Cart.defaultProps = {
  siteData: initialAppContext.appState.siteData,
}

export default Cart
