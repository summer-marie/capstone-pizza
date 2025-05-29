console.log('Hello Users')

import 'dotenv/config'
import { faker } from '@faker-js/faker'
import axios from 'axios'

const generateFakeUser = () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.firstName()
  return {
    firstName,
    lastName,
    email: faker.internet.email({ firstName: firstName.toLowerCase(), lastName: lastName.toLowerCase() }),
    // email: "blah@blah.com",
    // username: faker.internet.username({ firstName, lastName }),
    password: 'test',
  }
}

const user = generateFakeUser()
console.log('user', user)

const buildUser = await axios.post(`${process.env.SERVER_URL}/users`, user)
console.log('buildUser', buildUser.data)
