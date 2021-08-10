import Tippy from '@tippyjs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { initialProductsState } from '../products'

const SearchBox = ({ state, setState }) => (
  <Tippy content='Search a Product'>
    <div>
      <FontAwesomeIcon icon={faSearch} className='mx-2' />
      <input
        type='text'
        className='border rounded p-1'
        placeholder='search product'
        onChange={(v) =>
          setState({
            ...state,
            searchText: v.target.value,
            itemsPerPage: initialProductsState.itemsPerPage,
            currentPage: 1,
          })
        }
      />
    </div>
  </Tippy>
)

SearchBox.defaultProps = { state: {}, setState: () => {} }

export default SearchBox
