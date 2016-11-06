import { User, UserProfile } from '../models'
import {
  GraphQLBoolean,
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

import JobType from '../types/JobType';
import { Job } from '../models';
const JobById = {
    type: JobType,
    args: {
        id: { type: new NonNull(Int) },
    },
    resolve(_, args) {
        return Job.findOne({ where: {id: args.id }})
    },
};

export default JobById;
