import { Router } from 'express'
import {
    create,
    // getAll,
    // getById,
    updateMultipleLocations,
    deleteLocation
} from '../controllers/location.js'
import { validateAuthentication } from '../middleware/auth.js'

const router = Router()

router.post('/', create)
// router.get('/', getAll)
// router.get('/:id', getById)
router.patch('/', validateAuthentication, updateMultipleLocations)
router.delete('/:id', validateAuthentication, deleteLocation)

export default router