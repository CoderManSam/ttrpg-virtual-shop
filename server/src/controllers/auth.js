import dbClient from '../utils/dbClient.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendDataResponse} from '../utils/responses.js'

export const login = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return sendDataResponse(res, 400, {
      email: 'Invalid username and/or password provided'
    })
  }

  try {
    const foundUser = await dbClient.user.findUnique({
        where: {
            username: username
        }
    })
    const areCredentialsValid = await validateCredentials(password, foundUser)

    if (!areCredentialsValid) {
      return sendDataResponse(res, 400, {
        email: 'Invalid username and/or password provided'
      })
    }

    const token = generateJwt(foundUser.id, foundUser.username)

    return sendDataResponse(res, 200, {token})
  } catch (e) {
    console.error(e)
    throw e
  }
}

function generateJwt(userId, userUsername) {
  return jwt.sign({ userId, userUsername }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY })
}

export async function validateCredentials(password, user) {
  if (!user) {
    return false
  }

  if (!password) {
    return false
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return false
  }

  return true
}