export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** String representation of an Entity ID. */
  Binary: any;
};

export type Account = Node & {
  __typename?: 'Account';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Binary'];
  name: Scalars['String'];
};

export type Category = Node & {
  __typename?: 'Category';
  id: Scalars['Binary'];
  name: Scalars['String'];
};

export type CreateLinkBody = {
  caption?: InputMaybe<Scalars['String']>;
  categoryIds: Array<Scalars['Binary']>;
  mentionIds?: InputMaybe<Array<Scalars['Binary']>>;
  url: Scalars['String'];
};

export type CreateLinkInput = {
  body: CreateLinkBody;
};

export type CreateLinkOutput = {
  __typename?: 'CreateLinkOutput';
  link: Link;
};

export type Link = Node & {
  __typename?: 'Link';
  accountId?: Maybe<Account>;
  caption?: Maybe<Scalars['String']>;
  categories: Array<Category>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Binary'];
  image?: Maybe<Scalars['String']>;
  mentions?: Maybe<Array<Account>>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type LinkConnection = {
  __typename?: 'LinkConnection';
  edges: Array<LinkEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LinkEdge = {
  __typename?: 'LinkEdge';
  cursor: Scalars['Binary'];
  node: Link;
};

export type LinksFilter = {
  accountId?: InputMaybe<Scalars['Binary']>;
  categoryIds?: InputMaybe<Array<Scalars['Binary']>>;
  keyword?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLink: CreateLinkOutput;
};


export type MutationCreateLinkArgs = {
  input: CreateLinkInput;
};

export type Node = {
  id: Scalars['Binary'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Binary']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Binary']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  links: LinkConnection;
};


export type QueryLinksArgs = {
  after?: InputMaybe<Scalars['Binary']>;
  before?: InputMaybe<Scalars['Binary']>;
  filter?: InputMaybe<LinksFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};
