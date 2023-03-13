import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/SequelizeConfig'

export default class Products extends Model {
  declare id:number
  declare name:string
}

Products.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: 'products',
  timestamps: false
})
