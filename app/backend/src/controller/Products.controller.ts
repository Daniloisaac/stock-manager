import { Request, Response } from 'express'

import ProductsService from '../services/Products.service'

export default class ProductsController {
  private _productsService:ProductsService

  constructor () { this._productsService = new ProductsService() }

  public async insertNewProduct (req: Request, res: Response) {
    const { name } = req.body

    const newProduct = await this._productsService.insertNewProduct(name)
    return res.status(200).send(newProduct)
  }

  public async getAllProducts (_req: Request, res: Response) {
    const allProduct = await this._productsService.getAllProducts()
    return res.status(200).send(allProduct)
  }

  public async getProductById (req: Request, res: Response) {
    const { id } = req.params
    console.log(id)
    const product = await this._productsService.getProductById(id)
    return res.status(200).send(product)
  }

  public async editingProduct (req: Request, res: Response) {
    const { id } = req.params
    const { name } = req.body
    const product = await this._productsService.editingProduct(id, name)
    return res.status(200).send(product)
  }
}
