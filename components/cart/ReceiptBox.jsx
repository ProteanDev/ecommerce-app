import Tippy from '@tippyjs/react'

const ReceiptBox = ({ subtotal, discounts, taxes, total, onCheckout }) => (
  <div className='flex flex-row flex-wrap w-full mt-10 items-center justify-around'>
    <div className='my-5'>
      <div className='grid grid-cols-2 gap-3'>
        <div className='flex flex-col w-full'>
          <span>SUBTOTAL</span>
          <span>DISCOUNTS</span>
          <span>TAXES</span>
        </div>
        <div className='flex flex-col w-full items-end'>
          <span>{`$${subtotal}`}</span>
          <span>{`${discounts}%`}</span>
          <span>{`${taxes}%`}</span>
        </div>
      </div>
      <div className='w-full h-px border border-gray-300' />
      <div className='grid grid-cols-2 gap-3'>
        <span className='flex flex-col w-full'>TOTAL</span>
        <span className='flex flex-col w-full items-end'>{`$${total}`}</span>
      </div>
    </div>
    <Tippy content='Check out Cart'>
      <button
        className='rounded bg-yellow-300 text-white text-xl p-10'
        onClick={onCheckout}
      >
        CHECKOUT
      </button>
    </Tippy>
  </div>
)

export default ReceiptBox
