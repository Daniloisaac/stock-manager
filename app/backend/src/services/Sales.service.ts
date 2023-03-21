import SalesModel from '../database/models/Sales.model'

export default class SalesService {
  public async insertNewSales () {
    const dateBr = new Date(new Date()
      .toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }))

    const newSales = await SalesModel.create({ date: dateBr })
    return newSales
  }
}
