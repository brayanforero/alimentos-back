import { DataTypes } from 'sequelize'
import Store from '../../database/store.js'
import Member from '../members/Member.Model.js'
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

Delivery.belongsToMany(Member, {
  through: 'delivery_member',
  foreignKey: 'delivery_id',
  as: 'payers',
})

Member.belongsToMany(Delivery, {
  through: 'delivery_member',
  foreignKey: 'member_id',
  as: 'payments',
})
export default Delivery
