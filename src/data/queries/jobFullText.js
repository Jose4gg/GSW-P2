import {
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt as Int,
    GraphQLNonNull as NonNull,
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
} from 'graphql';
import { User, UserProfile } from '../models'

import JobType from '../types/JobType';
import { sequelize } from '../models';

const JobFullTextSearch = {
    type: new GraphQLList(JobType),
    args: {
        text: { type: new NonNull(StringType) },
    },
    resolve(_, args) {
        //<TODO></TODO>
        let text = `EXEC	[dbo].[JobFullTextSearch] @sp = N'${args.text}'`;
        return sequelize.query(text, { type: sequelize.QueryTypes.SELECT})
    },
};

export default JobFullTextSearch;
