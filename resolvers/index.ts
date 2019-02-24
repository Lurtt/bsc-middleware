import { Resolvers } from '../generated/graphqlgen'

import { Note } from './Note'
import { Query } from './Query'
import { Mutation } from './Mutation'

const resolvers: Resolvers = {
  Query,
  Mutation,
  Note,
}

export { resolvers }
