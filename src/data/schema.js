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
import job, {JobByCategory} from './queries/job';

import {JobEdit} from './mutations/job.create'
import JobFullTextSearch from './queries/jobFullText'
import categories from './queries/categories'
import content from './queries/content';
import jobCreate from './mutations/job.create'
import me from './queries/me';
import news from './queries/news';

//

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      content,
      news,
      job,
      categories,
      JobByCategory,
      JobFullTextSearch
    },
  }),
  mutation: new ObjectType({
    name: "Mutation",
    fields: {
      jobCreate,
      JobEdit
    }
  })
});

export default schema;

