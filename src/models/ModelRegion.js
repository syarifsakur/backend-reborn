import { DataTypes } from 'sequelize';
import db from '../configs/Database.js';
import Aparatus from './ModelAparatus.js';

const Region = db.define(
  'regions',
  {
    uuid: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leader_id: {
      type: DataTypes.STRING,
    },
    total_population: {
      type: DataTypes.INTEGER,
    },
    hectare_area: {
      type: DataTypes.STRING,
    },
    geo_polygon: {
      type: DataTypes.TEXT,
    },
    map_color: {
      type: DataTypes.STRING(20),
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

Region.belongsTo(Aparatus, {
  foreignKey: 'leader_id',
  as: 'leader',
  onDelete: 'set null',
});

export default Region;
