import { Router } from 'express'
import SalesController from '../controller/Sales.controller'

const router = Router()

router.post('/', (req, res) => new SalesController().insertNewSale(req, res))

export default router
