import { Router } from 'express'
import {
    create,
    getMyShops,
    getById,
    updatePlayerShops
} from '../controllers/shop.js'

const router = Router()

router.post('/', create)
router.get('/', getMyShops)
router.get('/:id', getById)
router.patch('/:id', updatePlayerShops)

export default router