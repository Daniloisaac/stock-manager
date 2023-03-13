import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/SequelizeConfig'

export default class Sales extends Model {
  declare id:number
  declare name:string
}

Sales.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  date: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: 'sales',
  timestamps: false
})
