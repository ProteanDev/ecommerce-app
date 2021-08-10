import Tippy from '@tippyjs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { initialProductsState } from '../products'

const FilterBox = ({ categories, state, setState }) => (
  <Tippy content='Filter by Category'>
    <div>
      <FontAwesomeIcon icon={faFilter} className='mx-2' />
      <select
        name='filter'
        onChange={(v) =>
          setState({
            ...state,
            currentCategory: v.target.value,
            itemsPerPage: initialProductsState.itemsPerPage,
            currentPage: 1,
          })
        }
      >
        {['all', ...categories].map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  </Tippy>
)

FilterBox.defaultProps = { categories: [], state: {}, setState: () => {} }

export default FilterBox
