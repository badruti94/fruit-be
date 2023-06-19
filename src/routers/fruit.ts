import  express from 'express'
import { createFruit, deleteFruit, getAllFruit, updateFruit } from '../controllers/fruitController'

const router: express.Router = express.Router()

router.get('/', getAllFruit)
router.post('/', createFruit)
router.put('/:id', updateFruit)
router.delete('/:id', deleteFruit)

export default router