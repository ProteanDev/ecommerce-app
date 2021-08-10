import { createMocks } from 'node-mocks-http'
import productsApi from '../../pages/api/products'

describe('Test Products', () => {
  it('Route works', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      params: {},
    })

    await productsApi(req, res)

    expect(res._getStatusCode()).toBe(200)
  })
})
