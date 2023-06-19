import express from 'express'
const router: express.Router = express.Router()

import fruit from './fruit'

router.use('/fruits', fruit)

export default router