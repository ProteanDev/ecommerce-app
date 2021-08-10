import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlusCircle,
  faMinusCircle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'

const CartItem = ({
  image,
  cartItemId,
  title,
  quantity,
  price,
  setQuantity,
  removeItem,
}) => (
  <div className='grid grid-cols-6 gap-2 mb-1 shadow p-2 items-center'>
    <div className='col-span-1 flex items-center justify-center'>
      <img
        src={image}
        alt='Product Image Here'
        className='object-contain h-10 w-10'
      />
    </div>
    <span className='col-span-5 flex flex-col flex-nowrap justify-between items-center pr-1'>
      <p className='text-xs w-full text-left mb-2'>{title}</p>
      <div className='grid grid-cols-2 gap-5 w-full'>
        <div className='flex flex-row items-center justify-around w-full'>
          <Tippy content='Add Quantity'>
            <button
              className='px-1'
              onClick={() => setQuantity(cartItemId, quantity + 1)}
            >
              <FontAwesomeIcon icon={faPlusCircle} />
            </button>
          </Tippy>
          <input
            type='number'
            name='itemsPerPage'
            className='text-center border rounded w-full'
            value={quantity}
            onChange={(e) => {
              if (e.target.value > 0 && setQuantity)
                setQuantity(cartItemId, e.target.value)
            }}
          />
          {quantity !== 1 && (
            <Tippy content='Remove Quantity'>
              <button
                className='px-1'
                onClick={() => {
                  if (quantity > 1) setQuantity(cartItemId, quantity - 1)
                }}
              >
                <FontAwesomeIcon icon={faMinusCircle} />
              </button>
            </Tippy>
          )}
          <Tippy content='Remove Item'>
            <button className='px-1' onClick={() => removeItem(cartItemId)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </Tippy>
        </div>
        <p className='flex flex-row items-center justify-center text-sm'>
          = ${(parseFloat(price) * parseFloat(quantity)).toFixed(2)}
        </p>
      </div>
    </span>
  </div>
)

export default CartItem
