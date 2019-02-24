import { MutationResolvers } from '../generated/graphqlgen'

const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  createNote: (parent, { title }, { prisma }) => {
    return prisma.createNote({
      title,
    })
  },
  updateNote: (parent, { data, where: { id } }, { prisma }) => {
    return prisma.updateNote({
      data,
      where: { id },
    })
  },
  deleteNote: (parent, { id }, { prisma }) => {
    return prisma.deleteNote({ id })
  },
}

export { Mutation }
