import dbClient from '../utils/dbClient.js'
import { sendDataResponse} from '../utils/responses.js'

export const create = async (req, res) => {
    const {top, left, shopId, itemId} = req.body
  
    const createdLocation = await dbClient.location.create({
        data: {
            top: top,
            left: left,
            shopId: shopId,
            itemId: itemId
        }
    })

    return sendDataResponse(res, 201, { createdLocation })
} 

const updateLocation = async (location) => {
    const {id, top, left} = location

    const updatedLocation = await dbClient.location.upsert({
        where: {
            id: id
        },
        update: {
            top: top,
            left: left
        },
        create: {
            top: top,
            left: left
        }
    })

    return updatedLocation
}

export const updateMultipleLocations = async (req, res) => {
    const locations = req.body.locations

    if(!locations || locations.length === 0){
        return sendDataResponse(res, 400, { locations: "No location data has been provided" })
    }

    const updatedLocations = await locations.map(location =>  updateLocation(location));

    const promisesCompletedUpdatedLocations = await Promise.all(updatedLocations)

    return sendDataResponse(res, 200, { locations: promisesCompletedUpdatedLocations })
}

export const deleteLocation = async (req, res) => {
    const {id} = req.params
    const idAsNumber = Number(id)

    const deleteLocation = await dbClient.location.delete({
        where: {
            id: idAsNumber,
        },
    })
}