import { Category, Job } from '../models';
import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';
import { User, UserProfile } from '../models'

import CategoryType from '../types/CategoryType';

const categories = {
    type: new GraphQLList(CategoryType),
    resolve(_, args) {
        return Category.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
    },
};


export default categories;
