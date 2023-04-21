// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode')

async function insert(data, key) {
  const LinksTable = aircode.db.table('links')
  let result
  if (Array.isArray(data)) {
    const items = data.map(i => ({
      key,
      title: i.title,
      href: i.href,
    }))
    result = await LinksTable.save(items)
  }
  else {
    const item = {
      key,
      title: data.title,
      href: data.href,
    }
    result = await LinksTable.save(item)
  }

  return result
}

async function find(key) {
  const LinksTable = aircode.db.table('links')
  const matches = await LinksTable.where({ key }).find()

  return matches
}

module.exports = {
  insert,
  find,
}
