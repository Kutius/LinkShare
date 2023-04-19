// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode')
const { insert, find } = require('./db')

module.exports = async function (params, context) {
  console.log('Received params:', params)
  const { query } = params
  const result = await find(query)

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

// const result = await insert({
//   title: 'nihao',
//   href: 'https://baidu.com'
// },query)
