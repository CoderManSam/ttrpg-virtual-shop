import { Router } from 'express'
import {
    create,
    // getAll,
    getById
} from '../controllers/user.js'
import { validateAuthentication } from '../middleware/auth.js'

const router = Router()

router.post('/', create)
// router.get('/', getAll)
router.get('/', validateAuthentication, getById)

export default router