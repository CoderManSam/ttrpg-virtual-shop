import dbClient from '../utils/dbClient.js'
import bcrypt from 'bcrypt'
import { sendDataResponse} from '../utils/responses.js'

export const create = async (req, res) => {
    const {username, password} = req.body
  
    try {
      const existingUser = await dbClient.user.findUnique({
        where: {
            username: username
        }
      })
  
      if (existingUser) {
        return sendDataResponse(res, 400, { username: 'Username already in use' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)
  
      const createdUser = await dbClient.user.create({
        data: {
            username: username,
            password: hashedPassword
        }
      })
      return sendDataResponse(res, 201, { createdUser })
    } catch (err) {
        console.error(err)
      throw err
    }
}

export const getById = async (req, res) => {
    const id = parseInt(req.params.id)
  
    try {
      const foundUser = await dbClient.findUnique({
        where: {
            id: id
        }
      })
  
      if (!foundUser) {
        return sendDataResponse(res, 404, { id: "A user with this id could not be found" })
      }
  
      return sendDataResponse(res, 200, foundUser)
    } catch (e) {
        sendDataResponse(res, 400, {error: e})
      throw e
    }
}

// export const findByUsername = async (req, res) => {

// }