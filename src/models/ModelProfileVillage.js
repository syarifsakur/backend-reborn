import { DataTypes } from 'sequelize';
import db from '../configs/Database.js';

const ProfileVillage = db.define(
  'profile_village',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: true,
      },
    },
    name_village: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    path_img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    vision: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    mission: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    history: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    polygon: {
      type: DataTypes.TEXT,
    },
    central_lat: {
      type: DataTypes.STRING,
    },
    central_long: {
      type: DataTypes.STRING,
    },
    color_polygon: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default ProfileVillage;
