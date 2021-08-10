import Tippy from '@tippyjs/react'
import { useState } from 'react'
import { addToCartTooltipMsg } from '../../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import ModalView from '../ModalView'

const ProductDetails = ({ addToCart, state, setState }) => {
  const { selectedProduct } = state
  const { image, title, description, price } = selectedProduct
  const [quantity, setQuantity] = useState(1)
  return (
    <ModalView
      modalVisible={selectedProduct}
      onModalHide={() => setState({ ...state, selectedProduct: null })}
    >
      <img
        src={image}
        alt={title}
        className='object-contain h-1/2 w-1/2 py-5'
      />
      <div className='px-5'>
        <span>
          <p className='my-2 text-lg'>{title}</p>
          <p className='text-sm my-2'>{description}</p>
        </span>
        <div className='flex flex-row justify-end items-center w-full'>
          <p className='text-lg m-5'>${price}</p>
          x
          <input
            type='number'
            name='itemsPerPage'
            className='w-10 text-center border rounded mx-1'
            value={quantity}
            onChange={(e) => {
              if (e.target.value > 0) setQuantity(e.target.value)
            }}
          />
          <Tippy content={addToCartTooltipMsg(price)}>
            <button
              className='bg-green-300 p-3 rounded-full'
              onClick={() => {
                console.log('quantity: ', quantity)
                if (addToCart) addToCart(selectedProduct, quantity)
                return setState({ ...state, selectedProduct: null })
              }}
            >
              <span className='flex flex-row items-center justify-center'>
                <p className='text-xs'>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus} className='mx-2' />
              </span>
            </button>
          </Tippy>
        </div>
      </div>
    </ModalView>
  )
}

ProductDetails.defaultProps = {
  addToCart: () => {},
  state: {
    selectedProduct: { image: null, title: '', description: '', price: '' },
  },
  setState: () => {},
}

export default ProductDetails
