import dbClient from '../utils/dbClient.js'
import { sendDataResponse } from '../utils/responses.js'
import jwt from 'jsonwebtoken'

export async function validateAuthentication(req, res, next) {
  const header = req.header('authorization')

  if (!header) {
    return sendDataResponse(res, 400, {
      authorization: "No authorization header provided"
    })
  }

  const [type, token] = header.split(' ')

  const isTypeValid = validateTokenType(type)
  if (!isTypeValid) {
    return sendDataResponse(res, 400, {
      authorization: "Authorization type is missing/invalid"
    })
  }

  const isTokenValid = validateToken(token)
  if (!isTokenValid) {
    return sendMessageResponse(res, 400, {
      authorization: "Token is missing/invalid"
    })
  }
  if (isTokenValid.name === 'TokenExpiredError') {
    return sendMessageResponse(res, 400, {
      authorization: "Token has expired"
    })
  }

  const decodedToken = jwt.decode(token)

  const foundUser = await dbClient.user.findUnique({
    where: {
        id: decodedToken.userId
    }
  })
  delete foundUser.password

  req.user = foundUser
  next()
}

function validateToken(token) {
  if (!token) {
    return false
  }

  return jwt.verify(token, process.env.JWT_SECRET, (error) => {
    if (error) {
      return error
    }

    return !error
  })
}

function validateTokenType(type) {
  if (!type) {
    return false
  }

  if (type.toUpperCase() !== 'BEARER') {
    return false
  }

  return true
}