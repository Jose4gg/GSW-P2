import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const JobType = new ObjectType({
  name: 'Job',
  fields: {
    id: { type: new NonNull(Int) },
    company: { type: new NonNull(StringType) },
    type: { type: new NonNull(StringType) },
    Logo: { type: new NonNull(StringType) },
    URL: { type: new NonNull(StringType) },
    Job: { type: new NonNull(StringType) },
    Description: { type: new NonNull(StringType) },
    Email: { type: new NonNull(StringType) },
    Location: { type: new NonNull(StringType) },
  },
});

export default JobType;
