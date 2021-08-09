import axios from 'axios'

export default (req, res) => {
  axios
    .get(`${process.env.API_URL}products/categories`)
    .then((response) => res.status(200).json(response.data))
    .catch((error) => res.status(404).json(error))
}
