import { Request, Response } from 'express'
import SalesService from '../services/Sales.service'

export default class SalesController {
  private _salesService:SalesService

  constructor () { this._salesService = new SalesService() }

  public async insertNewSale (_req: Request, res: Response) {
    const newSales = await this._salesService.insertNewSales()
    return res.status(200).send(newSales)
  }
}
