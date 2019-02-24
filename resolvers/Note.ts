import { NoteResolvers } from '../generated/graphqlgen'

const Note: NoteResolvers.Type = {
  ...NoteResolvers.defaultResolvers,
}

export { Note }
