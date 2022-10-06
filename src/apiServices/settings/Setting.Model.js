import { DataTypes } from 'sequelize'
import Store from '../../database/store.js'
import Member from '../members/member.model.js'

const model = Store

const Setting = model.define(
  'Setting',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    main_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_reset: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'settings',
    hooks: {
      beforeCreate: ({ dataValues }, _options) => {
        dataValues.name = dataValues.name.toUpperCase()
      },
      beforeUpdate: ({ dataValues }, _options) => {
        dataValues.name = dataValues.name.toUpperCase()
      },
    },
  }
)

Member.hasOne(Setting, {
  foreignKey: 'member_id',
  sourceKey: 'id',
})
Setting.belongsTo(Member, {
  foreignKey: 'member_id',
  targetKey: 'id',
  as: 'master',
})

export default Setting
