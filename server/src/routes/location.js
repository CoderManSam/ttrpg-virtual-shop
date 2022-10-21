import { Router } from 'express'
import {
    create,
    // getAll,
    // getById,
    updateMultipleLocations
} from '../controllers/location.js'

const router = Router()

router.post('/', create)
// router.get('/', getAll)
// router.get('/:id', getById)
router.patch('/', updateMultipleLocations)

export default router