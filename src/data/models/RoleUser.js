import DataType from 'sequelize';
import Model from '../sequelize';

const RoleUser = Model.define('RoleUser', {

    RoleId: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
        primaryKey: true,
    },

    userId: {
        type: DataType.UUID,
        primaryKey: true
    },
});

export default RoleUser;
