import Tippy from '@tippyjs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faList } from '@fortawesome/free-solid-svg-icons'

const ViewModeBox = ({ state, setState }) => (
  <>
    <Tippy content='View in Grid'>
      <button
        className={`${
          state.viewMode === 'grid' ? 'opacity-100' : 'opacity-50'
        }`}
        onClick={() => setState({ ...state, viewMode: 'grid' })}
      >
        <FontAwesomeIcon icon={faTable} className='mx-2' />
      </button>
    </Tippy>
    <Tippy content='View as List'>
      <button
        className={`${
          state.viewMode === 'list' ? 'opacity-100' : 'opacity-50'
        }`}
        onClick={() => setState({ ...state, viewMode: 'list' })}
      >
        <FontAwesomeIcon icon={faList} className='mx-2' />
      </button>
    </Tippy>
  </>
)

ViewModeBox.defaultProps = { state: { viewMode: 'list' }, setState: () => {} }

export default ViewModeBox
