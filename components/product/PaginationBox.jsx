import Tippy from '@tippyjs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleLeft,
  faArrowLeft,
  faArrowRight,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'

const PagenationBox = ({ productCount, state, setState }) => {
  const { itemsPerPage, currentPage } = state
  const pageCount = Math.ceil(productCount / itemsPerPage)
  return (
    <>
      <Tippy content='Go to First Page'>
        <button
          onClick={() => {
            if (currentPage > 1) setState({ ...state, currentPage: 1 })
          }}
        >
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            className={`mx-2 ${
              currentPage === 1 ? 'opacity-50' : 'opacity-100'
            }`}
          />
        </button>
      </Tippy>
      <Tippy content='Go Back'>
        <button
          onClick={() => {
            if (currentPage > 1)
              setState({ ...state, currentPage: currentPage - 1 })
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`mx-2 ${
              currentPage === 1 ? 'opacity-50' : 'opacity-100'
            }`}
          />
        </button>
      </Tippy>
      <Tippy content='Set Number of Items per Page'>
        <input
          type='number'
          name='itemsPerPage'
          className='w-10 text-center border rounded mx-1'
          value={itemsPerPage}
          onChange={(e) => {
            if (e.target.value > 0)
              setState({ ...state, itemsPerPage: e.target.value })
          }}
        />
      </Tippy>
      Items in Page {currentPage} of {pageCount}
      <Tippy content='Next Page'>
        <button
          onClick={() => {
            if (currentPage < pageCount)
              setState({ ...state, currentPage: currentPage + 1 })
          }}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`mx-2 ${
              currentPage === pageCount ? 'opacity-50' : 'opacity-100'
            }`}
          />
        </button>
      </Tippy>
      <Tippy content='Go to Last Page'>
        <button
          onClick={() => {
            if (currentPage < pageCount)
              setState({ ...state, currentPage: pageCount })
          }}
        >
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className={`mx-2 ${
              currentPage === pageCount ? 'opacity-50' : 'opacity-100'
            }`}
          />
        </button>
      </Tippy>
    </>
  )
}

PagenationBox.defaultProps = {
  productCount: 0,
  state: { itemsPerPage: 5, currentPage: 1 },
  setState: () => {},
}

export default PagenationBox
