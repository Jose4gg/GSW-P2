import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const CategoryType = new ObjectType({
  name: 'Category',
  fields: {
    id: { type: new NonNull(Int) },
    description: {type: new NonNull(StringType)}
  },
});

export default CategoryType;

 