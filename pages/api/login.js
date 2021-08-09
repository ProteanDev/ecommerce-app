import axios from 'axios'

export default (req, res) => {
  const { username, password } = req.body
  const url = `${process.env.API_URL}auth/login`

  axios
    .post(url, { username, password })
    .then((response) => res.status(200).json(response.data))
    .catch((error) => res.status(404).json(error))
}
