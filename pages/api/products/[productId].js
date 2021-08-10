import axios from 'axios'

export default (req, res) => {
  const { productId } = req.query
  axios
    .get(`${process.env.API_URL}products/${productId}`)
    .then((response) => res.status(200).json(response.data))
    .catch((error) => res.status(404).json(error))
}
