import { Router } from 'express'
import {
    create,
    getMyitems,
    getById,
    updatePlayerInventory
} from '../controllers/item.js'
import { validateAuthentication } from '../middleware/auth.js'


const router = Router()

router.post('/', validateAuthentication, create)
router.get('/', validateAuthentication, getMyitems)
router.get('/:id', validateAuthentication, getById)
router.patch('/:id', validateAuthentication, updatePlayerInventory)

export default router