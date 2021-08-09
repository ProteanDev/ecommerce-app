import axios from 'axios'

export default (req, res) => {
  const { userId } = req.query
  axios
    .get(`${process.env.API_URL}users/${userId}`)
    .then((response) => res.status(200).json(response.data))
    .catch((error) => res.status(404).json(error))
}
