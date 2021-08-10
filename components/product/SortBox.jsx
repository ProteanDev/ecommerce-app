import Tippy from '@tippyjs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSortAlphaDown,
  faSortAlphaUp,
  faSortAmountDown,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons'

const SortBox = ({ state, setState }) => {
  const { sortBy, sortType } = state
  return (
    <>
      <Tippy content='Sort by Name'>
        <button
          className={`${sortBy === 'title' ? 'opacity-100' : 'opacity-50'}`}
          onClick={() =>
            setState({
              ...state,
              sortBy: 'title',
              sortType: sortType === 'asc' ? 'desc' : 'asc',
            })
          }
        >
          <FontAwesomeIcon
            icon={sortType === 'asc' ? faSortAlphaDown : faSortAlphaUp}
            className='mx-2'
          />
        </button>
      </Tippy>
      <Tippy content='Sort by Price'>
        <button
          className={`${sortBy === 'price' ? 'opacity-100' : 'opacity-50'}`}
          onClick={() =>
            setState({
              ...state,
              sortBy: 'price',
              sortType: sortType === 'asc' ? 'desc' : 'asc',
            })
          }
        >
          <FontAwesomeIcon
            icon={sortType === 'asc' ? faSortAmountDown : faSortAmountUp}
            className='mx-2'
          />
        </button>
      </Tippy>
    </>
  )
}

SortBox.defaultProps = {
  state: { sortBy: '', sortType: '' },
  setState: () => {},
}

export default SortBox
