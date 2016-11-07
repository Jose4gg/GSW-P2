import { User, UserProfile } from '../models'
import {
    GraphQLBoolean,
    GraphQLInt as Int,
    GraphQLList,
    GraphQLNonNull as NonNull,
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
} from 'graphql';

import JobType from '../types/JobType';
import { sequelize } from '../models';

const JobFullTextSearch = {
    type: new GraphQLList(JobType),
    args: {
        text: { type: new NonNull(StringType) },
    },
    resolve(_, args) {
        //<TODO></TODO>
        let text = `Select * from Job where FREETEXT(*, '${args.text}')`;
        return sequelize.query(text, { type: sequelize.QueryTypes.SELECT})
    },
};

export default JobFullTextSearch;
