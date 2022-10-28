import { Router } from 'express'
import {
    create,
    getMyShops,
    getById,
    updatePlayerShops
} from '../controllers/shop.js'
import { validateAuthentication } from '../middleware/auth.js'

const router = Router()

router.post('/', validateAuthentication, create)
router.get('/', validateAuthentication, getMyShops)
router.get('/:id', getById)
router.patch('/:id', validateAuthentication, updatePlayerShops)

export default router