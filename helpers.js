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

export const generateId = (length) => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const sanitizeCart = (cart) => {
  if (!cart) return cart
  const { products } = cart
  const cleanedQuantity = products.map((p, i) => ({
    id: generateId(5),
    ...p,
    quantity: parseInt(`${p.quantity}`),
  }))

  return { ...cart, products: cleanedQuantity }
}

export const isValidSiteData = ({ users, products, categories, carts }) => {
  return (
    users.length > 0 ||
    products.length > 0 ||
    categories.length > 0 ||
    carts.length > 0
  )
}
