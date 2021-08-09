export const addToCartTooltipMsg = (price) =>
  parseInt(`${price}`) > 99 ? 'ಠ_ಠ' : '( ͡° ͜ʖ ͡°)'

export const searchBy = (category, title, searchText) =>
  `${category}`.toLowerCase().includes(`${searchText}`.toLowerCase().trim()) ||
  `${title}`.toLowerCase().includes(`${searchText}`.toLowerCase().trim())

export const sortCondition = (a, b, sortBy, sortType) =>
  sortType === 'asc'
    ? a[sortBy] > b[sortBy]
      ? 1
      : -1
    : a[sortBy] < b[sortBy]
    ? 1
    : -1

export const paginate = (products, itemsPerPage, currentPage) =>
  [...products].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

export const sanitizeCart = (cart) => {
  if (!cart) return cart

  const { products } = cart
  const cleanedQuantity = products.map((p) => ({
    ...p,
    quantity: parseInt(`${p.quantity}`),
  }))

  // TODO: Fix this algo
  //   const finalProducts = []
  //   let previousProduct = null

  //   cleanedQuantity
  //     .sort((a, b) => sortCondition(a, b, 'productId', 'asc'))
  //     .forEach((e) => {
  //       if (previousProduct) {
  //         if (previousProduct.productId === e.productId) {
  //           finalProducts.push({
  //             ...previousProduct,
  //             ...e,
  //             quantity: previousProduct.quantity + e.quantity,
  //           })
  //         }
  //       }
  //       previousProduct = e
  //     })

  //   console.log(finalProducts)

  return { ...cart, products: cleanedQuantity }
}

// sanitizeCart({
//   products: [
//     { productId: '1', quantity: '1' },
//     { productId: '1', quantity: '1' },
//     { productId: '1', quantity: '1' },
//     { productId: '3', quantity: '1' },
//     { productId: '3', quantity: '1' },
//     { productId: '4', quantity: '1' },
//   ],
// })
