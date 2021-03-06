import gql from 'graphql-tag';

export default gql`
  type User {
    id: Int!
    email: String!
    name: String
    posts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: PostWhereUniqueInput
      before: PostWhereUniqueInput
      first: Int
      last: Int
    ): [Post!]!
    group: Group
    groupId: Int
    comments(
      where: CommentWhereInput
      orderBy: CommentOrderByInput
      skip: Int
      after: CommentWhereUniqueInput
      before: CommentWhereUniqueInput
      first: Int
      last: Int
    ): [Comment!]!
  }

  type Query {
    findOneUser(where: UserWhereUniqueInput!): User
    findManyUser(
      where: UserWhereInput
      orderBy: UserOrderByInput
      after: UserWhereUniqueInput
      before: UserWhereUniqueInput
      skip: Int
      first: Int
      last: Int
    ): [User!]
    findManyUserCount(
      where: UserWhereInput
      orderBy: UserOrderByInput
      after: UserWhereUniqueInput
      before: UserWhereUniqueInput
      skip: Int
      first: Int
      last: Int
    ): Int!
  }
  type Mutation {
    createOneUser(data: UserCreateInput!): User!
    updateOneUser(where: UserWhereUniqueInput!, data: UserUpdateInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User
    deleteManyUser(where: UserWhereInput): BatchPayload
    updateManyUser(
      where: UserWhereInput
      data: UserUpdateManyMutationInput
    ): BatchPayload
  }
`;
