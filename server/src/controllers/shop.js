import dbClient from '../utils/dbClient.js'
import { sendDataResponse} from '../utils/responses.js'

export const create = async (req, res) => {
    const {name, image, userId} = req.body
  
    const createdShop = await dbClient.shop.create({
        data: {
            name: name,
            image: image,
            userId: userId
        }
    })

    return sendDataResponse(res, 201, { createdShop })
} 

export const getMyShops = async (req, res) => {
    const userId = req.user.id

    const myShops = await dbClient.shop.findmany({
        where: {
            userId: userId
        }
    })

    return sendDataResponse(res, 200, { myShops: myShops })
}

export const updatePlayerShops = async (req, res) => {
    const {id} = req.params
    const [players] = req.body

    const shop = await dbClient.shop.findUnique({
        where: {
            id: id
        }
    })

    if(shop){
        shop.players.push(players)

        const updatedPlayerShops = await dbClient.shop.update({
            where: {
                id: id
            },
            data: {
                players: shop.players,
            }
        })
    
        return sendDataResponse(res, 200, { shop: updatedPlayerShops })
    }

    else {
        return sendDataResponse(res, 404, { shop: "This shop cannot be found" })
    }
}