import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/SequelizeConfig'
import Sales from './Sales.model'
import Products from './Products.model'

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
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Sales,
      key: 'id'
    }
  },
  productId: {
    primaryKey: true,
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
