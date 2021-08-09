import axios from 'axios'

export default (req, res) => {
  const userApiUrl = `${process.env.API_URL}users`
  const productsApiUrl = `${process.env.API_URL}products`
  const categoriesApiUrl = `${process.env.API_URL}products/categories`
  const cartsApiUrl = `${process.env.API_URL}carts`

  const getUsers = axios.get(userApiUrl)
  const getProducts = axios.get(productsApiUrl)
  const getCategories = axios.get(categoriesApiUrl)
  const getCarts = axios.get(cartsApiUrl)

  const allRequests = [getUsers, getProducts, getCategories, getCarts]

  axios
    .all(allRequests)
    .then(
      axios.spread((...responses) => {
        const data = {
          users: responses[0].data,
          products: responses[1].data,
          categories: responses[2].data,
          carts: responses[3].data,
        }

        res.status(200).json(data)
      }),
    )
    .catch((error) => {
      console.error('api error: ', error)
      res.status(500).json(error)
    })
}
