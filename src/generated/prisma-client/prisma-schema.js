module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateLink {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Link {
  id: ID!
  creatAt: DateTime!
  updateAt: DateTime!
  description: String!
  url: String!
}

type LinkConnection {
  pageInfo: PageInfo!
  edges: [LinkEdge]!
  aggregate: AggregateLink!
}

input LinkCreateInput {
  id: ID
  creatAt: DateTime!
  description: String!
  url: String!
}

type LinkEdge {
  node: Link!
  cursor: String!
}

enum LinkOrderByInput {
  id_ASC
  id_DESC
  creatAt_ASC
  creatAt_DESC
  updateAt_ASC
  updateAt_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
}

type LinkPreviousValues {
  id: ID!
  creatAt: DateTime!
  updateAt: DateTime!
  description: String!
  url: String!
}

type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}

input LinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LinkWhereInput
  AND: [LinkSubscriptionWhereInput!]
  OR: [LinkSubscriptionWhereInput!]
  NOT: [LinkSubscriptionWhereInput!]
}

input LinkUpdateInput {
  creatAt: DateTime
  description: String
  url: String
}

input LinkUpdateManyMutationInput {
  creatAt: DateTime
  description: String
  url: String
}

input LinkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  creatAt: DateTime
  creatAt_not: DateTime
  creatAt_in: [DateTime!]
  creatAt_not_in: [DateTime!]
  creatAt_lt: DateTime
  creatAt_lte: DateTime
  creatAt_gt: DateTime
  creatAt_gte: DateTime
  updateAt: DateTime
  updateAt_not: DateTime
  updateAt_in: [DateTime!]
  updateAt_not_in: [DateTime!]
  updateAt_lt: DateTime
  updateAt_lte: DateTime
  updateAt_gt: DateTime
  updateAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [LinkWhereInput!]
  OR: [LinkWhereInput!]
  NOT: [LinkWhereInput!]
}

input LinkWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createLink(data: LinkCreateInput!): Link!
  updateLink(data: LinkUpdateInput!, where: LinkWhereUniqueInput!): Link
  updateManyLinks(data: LinkUpdateManyMutationInput!, where: LinkWhereInput): BatchPayload!
  upsertLink(where: LinkWhereUniqueInput!, create: LinkCreateInput!, update: LinkUpdateInput!): Link!
  deleteLink(where: LinkWhereUniqueInput!): Link
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  link(where: LinkWhereUniqueInput!): Link
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!
  node(id: ID!): Node
}

type Subscription {
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
}
`
      }
    