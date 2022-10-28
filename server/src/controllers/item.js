import dbClient from '../utils/dbClient.js'
import { sendDataResponse} from '../utils/responses.js'

export const create = async (req, res) => {
    const {name, image, description, cost} = req.body
    const id = parseInt(req.user.id)
    const costAsNum = parseInt(cost)
  
    const createdItem = await dbClient.item.create({
        data: {
            name: name,
            image: image,
            description: description,
            cost: costAsNum,
            userId: id
        }
    })

    return sendDataResponse(res, 201, { createdItem })
} 

export const getMyitems = async (req, res) => {
    const id = parseInt(req.user.id)

    const myItems = await dbClient.item.findMany({
        where: {
            userId: id
        },
        include: {
            locations: true
        }
    })

    return sendDataResponse(res, 200, { myItems: myItems })
}

const findItem = async (itemId) => {
    const foundItem = await dbClient.item.findUnique({
        where: {
            id: itemId
        },
        include: {
            locations: true
        }
    })

    return foundItem
}

const findItems = async (locations) => {
    const items = []

    await locations.map(location => items.push(findItem(location.itemId)) )

    return items
}

export const getById = async (req, res) => {
    const id = parseInt(req.params.id)
  
    try {
      const shop = await dbClient.shop.findUnique({
        where: {
            id: id
        },
        include: {
          locations: true
        }
      })
  
      if (!shop) {
        return sendDataResponse(res, 404, { id: "A shop with this id could not be found" })
      }

      const locations = shop.locations

      const items = await findItems(locations)

      const promisesCompletedItems = await Promise.all(items)
  
      return sendDataResponse(res, 200, {items: promisesCompletedItems})
    } catch (e) {
        sendDataResponse(res, 400, {error: e})
      throw e
    }
}

export const updatePlayerInventory = async (req, res) => {
    const userId = parseInt(req.user.id)
    const itemId = parseInt(req.params.id)

    const foundItem = await dbClient.item.findMany({
        where: {
            id: itemId
        }
    })

    const promisesCompletedItem = await Promise.all(foundItem)

    const updatedPlayer = await dbClient.user.update({
        where: { 
            id: userId 
        },
        data: {
            playerInventory: {
                connect: [{ id: promisesCompletedItem[0].id }], // connect that member with the event ID
          },
        },
      });

    delete updatedPlayer.password

    return sendDataResponse(res, 200, { item: foundItem })
}