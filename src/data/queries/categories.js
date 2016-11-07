import { User, UserProfile } from '../models'
import {
  GraphQLBoolean,
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLList,
  GraphQLString as StringType,
} from 'graphql';

import CategoryType from '../types/CategoryType';
import { Category, Job } from '../models';


const categories = {
    type: new GraphQLList(CategoryType),
    resolve(_, args) {
        return Category.findAll();
    },
};

export default categories;
