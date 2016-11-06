import DataType from 'sequelize';
import Model from '../sequelize';

const Category = Model.define('Category', {

  description: {
    type: DataType.STRING,
  },

});

export default Category;
