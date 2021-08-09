import axios from 'axios'

export default (req, res) => {
  const { sort } = req.query
  let url = `${process.env.API_URL}products`

  if (sort) url = url + `?sort=${sort}`

  axios(url)
    .then((response) => res.status(200).json(response.data))
    .catch((error) => res.status(500).json(error))
}
