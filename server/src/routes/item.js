import { Router } from 'express'
import {
    create,
    getMyitems,
    // getById
} from '../controllers/item.js'

const router = Router()

router.post('/', create)
router.get('/', getMyitems)
// router.get('/:id', getById)

export default router