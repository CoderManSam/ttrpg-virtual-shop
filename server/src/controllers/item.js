import dbClient from '../utils/dbClient.js'
import { sendDataResponse} from '../utils/responses.js'

export const create = async (req, res) => {
    const {name, image, description, cost, userId} = req.body
  
    const createdItem = await dbClient.item.create({
        data: {
            name: name,
            image: image,
            description: description,
            cost: cost,
            userId: userId
        }
    })

    return sendDataResponse(res, 201, { createdItem })
} 

export const getMyitems = async (req, res) => {
    const userId = req.user.id

    const myItems = await dbClient.item.findmany({
        where: {
            userId: userId
        }
    })

    return sendDataResponse(res, 200, { myItems: myItems })
}