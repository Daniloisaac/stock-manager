import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/SequelizeConfig'

export default class Sales extends Model {
  declare id:number
  declare date:string
}

Sales.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  date: {
    type: DataTypes.DATE()
  }
}, {
  sequelize,
  tableName: 'sales',
  timestamps: false
})
