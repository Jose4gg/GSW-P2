/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLSchema as Schema,
} from 'graphql';

import content from './queries/content';
import jobCreate from './mutations/job.create'
import me from './queries/me';
import job from './queries/job';
import news from './queries/news';
import categories from './queries/categories'
//

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      content,
      news,
      job,
      categories
    },
  }),
  mutation: new ObjectType({
    name: "Mutation",
    fields: {
      jobCreate
    }
  })
});

export default schema;

