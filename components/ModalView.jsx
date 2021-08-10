import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Tippy from '@tippyjs/react'

const ModalView = ({ children, modalVisible, onModalHide }) => (
  <>
    {modalVisible && (
      <div
        className='bg-black bg-opacity-50 fixed top-0 left-0 h-full w-full flex items-center justify-center overflow-scroll py-10'
        onClick={() => {
          if (onModalHide) onModalHide()
        }}
      >
        <Tippy content='Close'>
          <button
            className='fixed top-3 right-2 shadow-sm rounded-full'
            onClick={() => {
              if (onModalHide) onModalHide()
            }}
          >
            <FontAwesomeIcon icon={faTimesCircle} size='lg' className='mx-2' />
          </button>
        </Tippy>
        <div
          className='flex flex-wrap sm:p-0 md:p-0 p-10 bg-white rounded border-blue-200 items-center justify-evenly h-full overflow-scroll'
          onClick={(e) => e.stopPropagation()}
        >
          {!!children && children}
        </div>
      </div>
    )}
  </>
)

ModalView.defaultProps = {
  children: null,
  modalVisible: false,
  onModalHide: () => {},
}

export default ModalView
