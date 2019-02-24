// Code generated by Prisma (prisma@1.27.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  note: (where?: NoteWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  note: (where: NoteWhereUniqueInput) => NotePromise;
  notes: (
    args?: {
      where?: NoteWhereInput;
      orderBy?: NoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Note>;
  notesConnection: (
    args?: {
      where?: NoteWhereInput;
      orderBy?: NoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => NoteConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createNote: (data: NoteCreateInput) => NotePromise;
  updateNote: (
    args: { data: NoteUpdateInput; where: NoteWhereUniqueInput }
  ) => NotePromise;
  updateManyNotes: (
    args: { data: NoteUpdateManyMutationInput; where?: NoteWhereInput }
  ) => BatchPayloadPromise;
  upsertNote: (
    args: {
      where: NoteWhereUniqueInput;
      create: NoteCreateInput;
      update: NoteUpdateInput;
    }
  ) => NotePromise;
  deleteNote: (where: NoteWhereUniqueInput) => NotePromise;
  deleteManyNotes: (where?: NoteWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  note: (
    where?: NoteSubscriptionWhereInput
  ) => NoteSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type NoteOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "finished_ASC"
  | "finished_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface NoteCreateInput {
  title: String;
  finished?: Boolean;
}

export interface NoteWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  finished?: Boolean;
  finished_not?: Boolean;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: NoteWhereInput[] | NoteWhereInput;
  OR?: NoteWhereInput[] | NoteWhereInput;
  NOT?: NoteWhereInput[] | NoteWhereInput;
}

export interface NoteUpdateInput {
  title?: String;
  finished?: Boolean;
}

export interface NoteUpdateManyMutationInput {
  title?: String;
  finished?: Boolean;
}

export interface NoteSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: NoteWhereInput;
  AND?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput;
  OR?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput;
  NOT?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput;
}

export type NoteWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface NoteEdge {
  node: Note;
  cursor: String;
}

export interface NoteEdgePromise extends Promise<NoteEdge>, Fragmentable {
  node: <T = NotePromise>() => T;
  cursor: () => Promise<String>;
}

export interface NoteEdgeSubscription
  extends Promise<AsyncIterator<NoteEdge>>,
    Fragmentable {
  node: <T = NoteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface NotePreviousValues {
  id: ID_Output;
  title: String;
  finished: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface NotePreviousValuesPromise
  extends Promise<NotePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  finished: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface NotePreviousValuesSubscription
  extends Promise<AsyncIterator<NotePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  finished: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateNote {
  count: Int;
}

export interface AggregateNotePromise
  extends Promise<AggregateNote>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateNoteSubscription
  extends Promise<AsyncIterator<AggregateNote>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface NoteSubscriptionPayload {
  mutation: MutationType;
  node: Note;
  updatedFields: String[];
  previousValues: NotePreviousValues;
}

export interface NoteSubscriptionPayloadPromise
  extends Promise<NoteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = NotePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = NotePreviousValuesPromise>() => T;
}

export interface NoteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<NoteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = NoteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = NotePreviousValuesSubscription>() => T;
}

export interface Note {
  id: ID_Output;
  title: String;
  finished: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface NotePromise extends Promise<Note>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  finished: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface NoteSubscription
  extends Promise<AsyncIterator<Note>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  finished: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface NoteConnection {
  pageInfo: PageInfo;
  edges: NoteEdge[];
}

export interface NoteConnectionPromise
  extends Promise<NoteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<NoteEdge>>() => T;
  aggregate: <T = AggregateNotePromise>() => T;
}

export interface NoteConnectionSubscription
  extends Promise<AsyncIterator<NoteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<NoteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateNoteSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Note",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/lukas-pospisil-2c7306/bsc-middleware/dev`
});
export const prisma = new Prisma();