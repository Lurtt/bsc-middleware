// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Note } from "./prisma-client";
import { Context } from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface NoteWhereInput {
    id?: string | null;
    id_not?: string | null;
    id_in?: string[] | null;
    id_not_in?: string[] | null;
    id_lt?: string | null;
    id_lte?: string | null;
    id_gt?: string | null;
    id_gte?: string | null;
    id_contains?: string | null;
    id_not_contains?: string | null;
    id_starts_with?: string | null;
    id_not_starts_with?: string | null;
    id_ends_with?: string | null;
    id_not_ends_with?: string | null;
    title?: string | null;
    title_not?: string | null;
    title_in?: string[] | null;
    title_not_in?: string[] | null;
    title_lt?: string | null;
    title_lte?: string | null;
    title_gt?: string | null;
    title_gte?: string | null;
    title_contains?: string | null;
    title_not_contains?: string | null;
    title_starts_with?: string | null;
    title_not_starts_with?: string | null;
    title_ends_with?: string | null;
    title_not_ends_with?: string | null;
    finished?: boolean | null;
    finished_not?: boolean | null;
    createdAt?: string | null;
    createdAt_not?: string | null;
    createdAt_in?: string[] | null;
    createdAt_not_in?: string[] | null;
    createdAt_lt?: string | null;
    createdAt_lte?: string | null;
    createdAt_gt?: string | null;
    createdAt_gte?: string | null;
    updatedAt?: string | null;
    updatedAt_not?: string | null;
    updatedAt_in?: string[] | null;
    updatedAt_not_in?: string[] | null;
    updatedAt_lt?: string | null;
    updatedAt_lte?: string | null;
    updatedAt_gt?: string | null;
    updatedAt_gte?: string | null;
    AND?: NoteWhereInput[] | null;
    OR?: NoteWhereInput[] | null;
    NOT?: NoteWhereInput[] | null;
  }

  export interface ArgsNotes {
    where?: NoteWhereInput | null;
  }

  export interface ArgsNote {
    noteId: string;
  }

  export type NotesResolver =
    | ((
        parent: undefined,
        args: ArgsNotes,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Note[] | Promise<Note[]>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsNotes,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Note[] | Promise<Note[]>;
      };

  export type NoteResolver =
    | ((
        parent: undefined,
        args: ArgsNote,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Note | null | Promise<Note | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsNote,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Note | null | Promise<Note | null>;
      };

  export interface Type {
    notes:
      | ((
          parent: undefined,
          args: ArgsNotes,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Note[] | Promise<Note[]>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsNotes,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Note[] | Promise<Note[]>;
        };

    note:
      | ((
          parent: undefined,
          args: ArgsNote,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Note | null | Promise<Note | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsNote,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Note | null | Promise<Note | null>;
        };
  }
}

export namespace NoteResolvers {
  export const defaultResolvers = {
    id: (parent: Note) => parent.id,
    title: (parent: Note) => parent.title,
    finished: (parent: Note) => parent.finished,
    createdAt: (parent: Note) => parent.createdAt,
    updatedAt: (parent: Note) => parent.updatedAt
  };

  export type IdResolver =
    | ((
        parent: Note,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Note,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type TitleResolver =
    | ((
        parent: Note,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Note,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type FinishedResolver =
    | ((
        parent: Note,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => boolean | Promise<boolean>)
    | {
        fragment: string;
        resolve: (
          parent: Note,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>;
      };

  export type CreatedAtResolver =
    | ((
        parent: Note,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Note,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type UpdatedAtResolver =
    | ((
        parent: Note,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Note,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export interface Type {
    id:
      | ((
          parent: Note,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Note,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    title:
      | ((
          parent: Note,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Note,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    finished:
      | ((
          parent: Note,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>)
      | {
          fragment: string;
          resolve: (
            parent: Note,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => boolean | Promise<boolean>;
        };

    createdAt:
      | ((
          parent: Note,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Note,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    updatedAt:
      | ((
          parent: Note,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Note,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface NoteWhereUniqueInput {
    id?: string | null;
  }
  export interface NoteUpdateInput {
    title?: string | null;
    finished?: boolean | null;
  }

  export interface ArgsCreateNote {
    title: string;
  }

  export interface ArgsUpdateNote {
    where: NoteWhereUniqueInput;
    data: NoteUpdateInput;
  }

  export interface ArgsDeleteNote {
    id: string;
  }

  export type CreateNoteResolver =
    | ((
        parent: undefined,
        args: ArgsCreateNote,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Note | Promise<Note>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsCreateNote,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Note | Promise<Note>;
      };

  export type UpdateNoteResolver =
    | ((
        parent: undefined,
        args: ArgsUpdateNote,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Note | Promise<Note>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsUpdateNote,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Note | Promise<Note>;
      };

  export type DeleteNoteResolver =
    | ((
        parent: undefined,
        args: ArgsDeleteNote,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Note | null | Promise<Note | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsDeleteNote,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Note | null | Promise<Note | null>;
      };

  export interface Type {
    createNote:
      | ((
          parent: undefined,
          args: ArgsCreateNote,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Note | Promise<Note>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsCreateNote,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Note | Promise<Note>;
        };

    updateNote:
      | ((
          parent: undefined,
          args: ArgsUpdateNote,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Note | Promise<Note>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsUpdateNote,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Note | Promise<Note>;
        };

    deleteNote:
      | ((
          parent: undefined,
          args: ArgsDeleteNote,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Note | null | Promise<Note | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsDeleteNote,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Note | null | Promise<Note | null>;
        };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Note: NoteResolvers.Type;
  Mutation: MutationResolvers.Type;
}

// @ts-ignore
declare module "graphql-tools" {
  interface IResolvers extends Resolvers {}
}
