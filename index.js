import fetch from "node-fetch";

async function getUser(name) {
  const response = await fetch('http://localhost:3000/users')
  const users = await response.json()

  const fetchedUser = users.find(user => user.name === name)

  if (fetchedUser) {
    const userResponse = await fetch(`http://localhost:3000/user/${fetchedUser.id}`)
    const user = await userResponse.json()
    return user
  } else {
    return null
  }
}

const bob = await getUser('Bob')

console.log(bob)

