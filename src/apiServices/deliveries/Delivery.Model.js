import { DataTypes } from 'sequelize'
import Store from '../../database/store.js'

const model = Store

const Delivery = model.define(
  'Delivery',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    peoples: {
      type: DataTypes.INTEGER,
    },
    unities: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'deliveries',
  }
)

export default Delivery
