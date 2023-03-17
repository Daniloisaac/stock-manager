import { Router } from 'express'
import ProductsController from '../controller/Products.controller'

const router = Router()

router.post('/', (req, res) => new ProductsController().insertNewProduct(req, res))
router.get('/', (req, res) => new ProductsController().getAllProducts(req, res))
router.get('/:id', (req, res) => new ProductsController().getProductById(req, res))

export default router
