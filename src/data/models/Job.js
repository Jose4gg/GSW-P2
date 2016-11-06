import DataType from 'sequelize';
import Model from '../sequelize';

const Job = Model.define('Job', {

  company: {
    type: DataType.STRING,
  },
  type: {
      type: DataType.ENUM('FULL-TIME', 'PART-TIME', 'FREELANCE')
  },
  Logo: {
      type: DataType.STRING
  },
  URL: {
      type: DataType.STRING
  },
  Job: {
      type: DataType.STRING
  },
  Location:  {
      type: DataType.STRING,
      allowNull: false
  },
  Description: {
      type: DataType.STRING,
  },
  Email: {
      type: DataType.STRING,
      validate: {
          isEmail: true
      }
  },
  Public: {
      type: DataType.BOOLEAN,
      allowNull: false
  }
});

export default Job;
