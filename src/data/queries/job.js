import {
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt as Int,
    GraphQLNonNull as NonNull,
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
} from 'graphql';
import { User, UserProfile } from '../models'

import { Job } from '../models';
import JobType from '../types/JobType';

const JobById = {
    type: JobType,
    args: {
        id: { type: new NonNull(Int) },
    },
    resolve(_, args) {
        return Job.findOne({
            where: { id: args.id },
            order: [
                ['createdAt', 'ASC']
            ]
        })
    },
};

const JobByCategory = {
    type: new GraphQLList(JobType),
    args: {
        id: { type: new NonNull(Int) },
    },
    resolve(_, args) {
        return Job.findAll({
            where: { CategoryId: args.id },
            order: [
                ['createdAt', 'ASC']
            ]
        })
    },
};

export {JobByCategory}
export default JobById;
