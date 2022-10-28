import dbClient from '../utils/dbClient.js'
import { sendDataResponse} from '../utils/responses.js'

export const create = async (req, res) => {
    const {name, image} = req.body
    const id = parseInt(req.user.id)
  
    const createdShop = await dbClient.shop.create({
        data: {
            name: name,
            image: image,
            userId: id
        }
    })

    return sendDataResponse(res, 201, { createdShop })
} 

// const findItem = async (itemId) => {
//     const foundItem = await dbClient.item.findUnique({
//         where: {
//             id: itemId
//         },
//         include: {
//             locations: true
//         }
//     })

//     return foundItem
// }

// const findItems = async (locations) => {
//     const items = []

//     await locations.map(location => items.push(findItem(location.itemId)) )

//     return items
// }

export const getById = async (req, res) => {
    const id = parseInt(req.params.id)
  
    try {
      const shop = await dbClient.shop.findUnique({
        where: {
            id: id
        },
        include: {
          locations: true,
          players: true
        }
      })
  
      if (!shop) {
        return sendDataResponse(res, 404, { id: "A shop with this id could not be found" })
      }

    //   const locations = shop.locations

    //   console.log("locations", locations)

    //   const items = await findItems(locations)

    //   const promisesCompletedItems = await Promise.all(items)

    //   console.log("promisesCompletedItems", promisesCompletedItems)
  
    //   return sendDataResponse(res, 200, {shop: shop, items: promisesCompletedItems})
      return sendDataResponse(res, 200, {shop: shop})
    } catch (e) {
        sendDataResponse(res, 400, {error: e})
      throw e
    }
}

export const getMyShops = async (req, res) => {
    const userId = parseInt(req.user.id)

    const myShops = await dbClient.shop.findmany({
        where: {
            userId: userId
        }
    })

    return sendDataResponse(res, 200, { myShops: myShops })
}

const findPlayer = async (player) => {
    const foundPlayer = await dbClient.user.findUnique({
        where: {
            username: player
        }
    })

    delete foundPlayer.password

    return foundPlayer
}

const findPlayers = async (players, idAsNumber) => {
    const playerData = []
    
    await players.map(player => playerData.push(findPlayer(player, idAsNumber)) );

    return playerData
}

const updatePlayers = async (players, shopId) => {
    const playerData = []
    
    await players.map(player => playerData.push(updatePlayer(player, shopId)) );

    return playerData
}

const updatePlayer = async (player, shopId) => {
    const updatedPlayer = await dbClient.user.update({
        where: { 
            username: player 
        },
        data: {
            playerShops: {
                connect: [{ id: shopId }], // connect that member with the event ID
          },
        },
      });

    delete updatedPlayer.password

    return updatedPlayer
}

export const updatePlayerShops = async (req, res) => {
    const {id} = req.params
    const idAsNumber = Number(id)
    const players = req.body

    const shop = await dbClient.shop.findUnique({
        where: {
            id: idAsNumber
        },
        include: {
            players: true
        }
    })

    if(shop){
        if(!players || players.length === 0){
            return sendDataResponse(res, 400, { players: "No player data has been provided" })
        }

        const playerData = await updatePlayers(players, shop.id)
    
        const promisesCompletedPlayerData = await Promise.all(playerData)

        // shop.players.push(...promisesCompletedPlayerData)

        // const updatedPlayerShops = await dbClient.shop.update({
        //     where: {
        //         id: idAsNumber
        //     },
        //     data: {
        //         players: shop.players,
        //     }
        // })

        console.log("promisesCompletedPlayerData", promisesCompletedPlayerData)
    
        return sendDataResponse(res, 200, { players: promisesCompletedPlayerData })
    }

    else {
        return sendDataResponse(res, 404, { shop: "This shop cannot be found" })
    }
}