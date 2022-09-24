import { DataTypes } from 'sequelize'
import Store from '../../database/store.js'
import Member from '../members/models.js'
const model = Store

const User = model.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_master: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
    },
    member_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Member,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'users',
    hooks: {
      beforeCreate: ({ dataValues }, _options) => {
        dataValues.username = dataValues.username.toUpperCase()
        dataValues.password = dataValues.password.toUpperCase()
      },
      beforeUpdate: ({ dataValues }, _options) => {
        dataValues.username = dataValues.username.toUpperCase()
        dataValues.password = dataValues.password.toUpperCase()
      },
    },
  }
)

User.belongsTo(Member)

export default User
