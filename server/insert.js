/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode')
const { insert } = require('./db')

module.exports = async function (params, context) {
  console.log('Received params:', params)
  const { key, link } = params
  const result = await insert(link, key)

  const response = {}

  if (result.error) {
    response.data = null
    response.error = result.error
  }
  else {
    response.data = result
  }

  return response
}
