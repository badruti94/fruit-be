import {
  DataTypes, Model, InferAttributes,
  InferCreationAttributes, CreationOptional
} from 'sequelize';
import sequelize from './index';

class Fruit extends Model<InferAttributes<Fruit>, InferCreationAttributes<Fruit>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Fruit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'fruits',
    sequelize
  }
);

export default Fruit