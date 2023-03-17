import ProductsModel from '../database/models/Products.model'

export default class ProductsService {
  public async insertNewProduct (name: string) {
    if (!name) return { messageError: 'name do product is required' }

    const newProduct = await ProductsModel.create({ name })
    return newProduct
  }

  public async getAllProducts () {
    const allProducts = await ProductsModel.findAll()
    return allProducts
  }

  public async getProductById (id: string) {
    const product = await ProductsModel.findByPk(id)
    return product
  }
}
