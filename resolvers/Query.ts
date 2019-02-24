import { QueryResolvers } from '../generated/graphqlgen'

const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  notes: (parent, { where }, { prisma }) => {
    return prisma.notes({ where, orderBy: 'createdAt_DESC' })
  },
  note: (parent, { noteId }, { prisma }) => {
    return prisma.note({ id: noteId })
  },
}

export { Query }
