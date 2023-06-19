import express, { Request, Response } from 'express'
import routes from './routers'

const app: express.Application = express()

/* app.get('/', (req: Request, res: Response) => {
    res.end('hello')
}) */

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', routes)

app.listen(3000, () => {
    console.log('listen');
})