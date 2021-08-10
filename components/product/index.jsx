import Tippy from '@tippyjs/react'
import { addToCartTooltipMsg } from '../../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, addToCart, showDetails }) => {
  const { title, image, price } = product
  return (
    <Tippy content='Click for Details'>
      <div
        className='flex m-2 p-10 shadow rounded flex-wrap border-blue-200 items-center justify-between'
        onClick={showDetails}
      >
        <img src={image} alt={title} className='h-32 w-32' />
        <p className='my-2'>{title}</p>
        <span className='flex flex-row justify-end items-center w-full'>
          <p className='text-lg m-5'>${price}</p>
          <Tippy content={addToCartTooltipMsg(price)}>
            <button
              onClick={(e) => {
                if (addToCart) addToCart(product)
                e.stopPropagation()
              }}
              className='bg-green-300 p-3 rounded-full'
            >
              <span className='flex flex-row items-center justify-center'>
                <p className='text-xs'>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus} className='mx-2' />
              </span>
            </button>
          </Tippy>
        </span>
      </div>
    </Tippy>
  )
}

export default Product
