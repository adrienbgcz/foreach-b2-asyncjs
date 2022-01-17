import express from 'express'

const app = express()

const users = [
  { id: '0', name: 'Alice', age: 20, email: 'alice@alice.fr' },
  { id: '1', name: 'Bob', age: 26, email: 'bobdosomething@ow.com' },
]

app.get('/user/:id', (req, res) => {
  const id = req.params.id
  const user = users.find(u => u.id === id)

  if (user) {
    return res.json(user)
  } else {
    return res.status(404)
  }
})

app.get('/users', (req, res) => {
  res.json(users.map(({id, name}) => ({ id, name})))
})

app.listen(3000, () => {
  console.log('server started on port 3000')
})