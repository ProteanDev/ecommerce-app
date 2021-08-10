import axios from 'axios'

export default (req, res) => {
  const { sort } = req.query
  let url = `${process.env.API_URL}carts`

  if (sort) url = url + `?sort=${sort}`

  axios
    .get(url)
    .then((response) => res.status(200).json(response.data))
    .catch((error) => res.status(404).json(error))
}
