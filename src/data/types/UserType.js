import {
  GraphQLList,
  GraphQLID as ID,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';
import { Role, RoleUser } from '../models';

import UserProfileType from './UserProfileType'

const RoleType = new ObjectType({
  name: 'Role',
  fields: {
    RoleId: {
      type: StringType,
    },
    userId: {
      type: StringType
    },
    description: {
      type: StringType,
      resolve(a){
        return Role.findOne({
          where: {id: a.RoleId},
          attributes: ['description']
        }).then(function(rol) {
          return rol.description
        })
      }
    }
  }
})

const UserType = new ObjectType({
  name: 'User',
  fields: {
    id: { type: new NonNull(ID) },
    email: { type: StringType },
    Profile: { type: UserProfileType },
    roles: {
      type: new GraphQLList(RoleType),
      resolve(a) {
        return RoleUser.findAll({
          where: { userId: a.id }
        })
      }
    }
  },
});

export default UserType;
