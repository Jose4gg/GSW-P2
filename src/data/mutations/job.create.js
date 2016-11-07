import {
  GraphQLBoolean,
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

import {Job} from '../models';
import  JobType from '../types/JobType';

const JobCreate = {
  type: JobType,
  args: {
    company: { type: new NonNull(StringType) },
    type: { type: new NonNull(StringType) },
    Logo: { type: new NonNull(StringType) },
    URL: { type: new NonNull(StringType) },
    Job: { type: new NonNull(StringType) },
    Location: { type: new NonNull(StringType) },
    Description: { type: new NonNull(StringType) },
    CategoryId: { type: new NonNull(Int) },
    Email: { type: new NonNull(StringType) },
    Public: {type: new NonNull(GraphQLBoolean)}
  },
  resolve(root, args) {
      return Job.create(args);
  },
};

export default JobCreate;
