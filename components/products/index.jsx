import { useContext, useEffect, useState } from 'react'
import {
  isValidSiteData,
  paginate,
  sanitizeCart,
  searchBy,
  sortCondition,
} from '../../helpers'
import ViewModeBox from '../product/ViewModeBox'
import FilterBox from '../product/FilterBox'
import SearchBox from '../product/SearchBox'
import SortBox from '../product/SortBox'
import PagenationBox from '../product/PaginationBox'
import ProductDetails from '../product/ProductDetails'
import Product from '../product'
import AppContext, {
  initialAppContext,
  saveAppState,
} from '../../contexts/AppContext'

export const initialProductsState = {
  viewMode: 'grid', // or list
  currentCategory: 'all',
  searchText: '',
  sortBy: 'title',
  sortType: 'asc', // or desc
  itemsPerPage: 5,
  currentPage: 1,
  selectedProduct: null,
}

const gridStyle =
  'grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-20'

const Products = ({ siteData }) => {
  const { appState, setAppState } = useContext(AppContext)
  const { currentCart } = appState

  // checks if our saved state has valid siteData to hydrate our components, otherwise, we'll just use the latest prop
  const { products, categories } = isValidSiteData(appState.siteData)
    ? appState.siteData
    : siteData

  const [state, setState] = useState(initialProductsState)
  const {
    viewMode,
    currentCategory,
    searchText,
    sortBy,
    sortType,
    itemsPerPage,
    currentPage,
    selectedProduct,
  } = state

  const viewStyle = viewMode === 'grid' ? gridStyle : 'pt-20'

  const filteredAndSortedProducts = products
    .filter((p) =>
      currentCategory === 'all'
        ? true
        : `${p.category}`.toLowerCase() === `${currentCategory}`.toLowerCase(),
    )
    .filter((p) => searchBy(p.category, p.title, searchText))
    .sort((a, b) => sortCondition(a, b, sortBy, sortType))

  const handleProductDetails = (product) =>
    setState({ ...state, selectedProduct: product })

  const addToCart = (product, quantity = 1) => {
    const { id: productId } = product
    const currentProducts = [...currentCart.products]
    setAppState({
      ...appState,
      siteData, // throwing this here for good measure
      currentCart: sanitizeCart({
        ...currentCart,
        products: [...currentProducts, { productId, quantity }],
      }),
    })
  }

  return (
    <>
      <div className='flex flex-wrap items-center justify-between p-4 fixed w-full shadow bg-white'>
        <div className='mb-1'>
          <SearchBox state={state} setState={setState} />
        </div>
        <div className='flex flex-row mt-1'>
          <ViewModeBox state={state} setState={setState} />
          <SortBox state={state} setState={setState} />
          <FilterBox
            categories={categories}
            state={state}
            setState={setState}
          />
        </div>
      </div>
      <div className={viewStyle}>
        {paginate(filteredAndSortedProducts, itemsPerPage, currentPage).map(
          (p) => (
            <Product
              key={p.id}
              product={p}
              showDetails={() => handleProductDetails(p)}
              addToCart={addToCart}
            />
          ),
        )}
      </div>
      <span className='flex items-center justify-end p-4'>
        <PagenationBox
          productCount={filteredAndSortedProducts.length}
          state={state}
          setState={setState}
        />
      </span>
      {!!selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          state={state}
          setState={setState}
          addToCart={addToCart}
        />
      )}
    </>
  )
}

Products.defaultProps = {
  siteData: initialAppContext.appState.siteData,
}

export default Products
