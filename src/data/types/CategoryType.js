import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLList
} from 'graphql';
import JobType from './JobType';

import { Category, Job } from '../models';

const CategoryType = new ObjectType({
  name: 'Category',
  fields: {
    id: { type: new NonNull(Int) },
    description: {type: new NonNull(StringType)},
    jobs: {
      type: new NonNull(new GraphQLList(JobType)),
      resolve(a) {
        return Job.findAll({where: {CategoryId:  a.id}})
      }
    }
  },
});

export default CategoryType;

 