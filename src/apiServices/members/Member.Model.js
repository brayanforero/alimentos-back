import { DataTypes } from 'sequelize'
import Store from '../../database/store.js'
import User from '../users/User.Model.js'

const model = Store

const Member = model.define(
  'Member',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastnames: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    members_of_family: {
      type: DataTypes.INTEGER,
    },
    is_worker: {
      type: DataTypes.BOOLEAN,
    },
    state: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'members',
    hooks: {
      beforeCreate: ({ dataValues }, _options) => {
        dataValues.names = dataValues.names.toUpperCase()
        dataValues.lastnames = dataValues.lastnames.toUpperCase()
        dataValues.address = dataValues.address.toUpperCase()
        dataValues.address = dataValues.address.toUpperCase()
      },
      beforeUpdate: ({ dataValues }, _options) => {
        dataValues.names = dataValues.names.toUpperCase()
        dataValues.lastnames = dataValues.lastnames.toUpperCase()
        dataValues.address = dataValues.address.toUpperCase()
        dataValues.address = dataValues.address.toUpperCase()
      },
    },
  }
)

Member.hasMany(User, {
  foreignKey: 'member_id',
  sourceKey: 'id',
})

User.belongsTo(Member, {
  foreignKey: 'member_id',
  targetKey: 'id',
})

export default Member
