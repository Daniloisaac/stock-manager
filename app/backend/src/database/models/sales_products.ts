import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/SequelizeConfig'
import Sales from './sales'
import Products from './products'

export default class SalesProducts extends Model {
  declare saleId:number
  declare productId:number
  declare quantity:number

  public readonly sale?: Sales
  public readonly product?: Products

  public readonly associations = {
    sale: {
      type: 'belongsTo',
      model: Sales,
      foreignKey: 'saleId'
    },
    product: {
      type: 'belongsTo',
      model: Products,
      foreignKey: 'productId'
    }
  }
}

SalesProducts.init({
  saleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Sales,
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'salesProducts',
  timestamps: false
})

SalesProducts.belongsTo(Sales, { foreignKey: 'saleId' })
SalesProducts.belongsTo(Products, { foreignKey: 'productId' })
Sales.hasMany(SalesProducts, { foreignKey: 'saleId' })
Products.hasMany(SalesProducts, { foreignKey: 'productId' })
