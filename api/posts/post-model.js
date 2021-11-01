const db = require('../../data/db-config.js')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // SELECT * FROM posts;
  // const result = await db.select('*').from('posts')
  // const result = await db.raw('SELECT * FROM posts;')
  const result = await db('posts')
  console.log(result)
  return result
}

async function getById(id) {
  // const result = await db('posts').where('id', '=', id)
  // const result = await db('posts').where({ id })
  // const result = await db.raw(`SELECT * FROM posts WHERE id = ${id}`) // bad!!!
  const result = await db('posts').where('id', id).first()
  console.log(result)
  return result
}

async function create(newPost) {
  const [id] = await db('posts').insert(newPost)
  const post = await getById(id)
  console.log(post)
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}
