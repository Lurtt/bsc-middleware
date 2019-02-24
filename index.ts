import { GraphQLServer } from 'graphql-yoga'

import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'

const options = {
  port: 4444,
  cors: {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:9000'],
  },
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})
server.start(options, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
)
