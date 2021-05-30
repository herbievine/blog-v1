import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  label?: Maybe<Scalars['String']>;
  hexColor?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<Array<Maybe<Posts>>>;
};


export type CategoryPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  values?: Maybe<Array<Maybe<Category>>>;
  groupBy?: Maybe<CategoryGroupBy>;
  aggregate?: Maybe<CategoryAggregator>;
};

export type CategoryConnectionCreated_At = {
  __typename?: 'CategoryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionHexColor = {
  __typename?: 'CategoryConnectionHexColor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionLabel = {
  __typename?: 'CategoryConnectionLabel';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionPublished_At = {
  __typename?: 'CategoryConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: 'CategoryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
  label?: Maybe<Array<Maybe<CategoryConnectionLabel>>>;
  hexColor?: Maybe<Array<Maybe<CategoryConnectionHexColor>>>;
  published_at?: Maybe<Array<Maybe<CategoryConnectionPublished_At>>>;
};

export type CategoryInput = {
  label?: Maybe<Scalars['String']>;
  hexColor?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};


export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Category | CategoryConnection | CategoryAggregator | CategoryGroupBy | CategoryConnectionId | CategoryConnectionCreated_At | CategoryConnectionUpdated_At | CategoryConnectionLabel | CategoryConnectionHexColor | CategoryConnectionPublished_At | CreateCategoryPayload | UpdateCategoryPayload | DeleteCategoryPayload | Posts | PostsConnection | PostsAggregator | PostsAggregatorSum | PostsAggregatorAvg | PostsAggregatorMin | PostsAggregatorMax | PostsGroupBy | PostsConnectionId | PostsConnectionCreated_At | PostsConnectionUpdated_At | PostsConnectionTitle | PostsConnectionSlug | PostsConnectionContent | PostsConnectionUser | PostsConnectionViews | PostsConnectionPublished_At | CreatePostPayload | UpdatePostPayload | DeletePostPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionDisplayName | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<CreateCategoryPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  createPost?: Maybe<CreatePostPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>;
};


export type MutationCreatePostArgs = {
  input?: Maybe<CreatePostInput>;
};


export type MutationUpdatePostArgs = {
  input?: Maybe<UpdatePostInput>;
};


export type MutationDeletePostArgs = {
  input?: Maybe<DeletePostInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type PostInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  content: Scalars['String'];
  user?: Maybe<Scalars['ID']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  views?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Posts = {
  __typename?: 'Posts';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  slug: Scalars['String'];
  content: Scalars['String'];
  user?: Maybe<UsersPermissionsUser>;
  views?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  categories?: Maybe<Array<Maybe<Category>>>;
};


export type PostsCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PostsAggregator = {
  __typename?: 'PostsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<PostsAggregatorSum>;
  avg?: Maybe<PostsAggregatorAvg>;
  min?: Maybe<PostsAggregatorMin>;
  max?: Maybe<PostsAggregatorMax>;
};

export type PostsAggregatorAvg = {
  __typename?: 'PostsAggregatorAvg';
  views?: Maybe<Scalars['Float']>;
};

export type PostsAggregatorMax = {
  __typename?: 'PostsAggregatorMax';
  views?: Maybe<Scalars['Float']>;
};

export type PostsAggregatorMin = {
  __typename?: 'PostsAggregatorMin';
  views?: Maybe<Scalars['Float']>;
};

export type PostsAggregatorSum = {
  __typename?: 'PostsAggregatorSum';
  views?: Maybe<Scalars['Float']>;
};

export type PostsConnection = {
  __typename?: 'PostsConnection';
  values?: Maybe<Array<Maybe<Posts>>>;
  groupBy?: Maybe<PostsGroupBy>;
  aggregate?: Maybe<PostsAggregator>;
};

export type PostsConnectionContent = {
  __typename?: 'PostsConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionCreated_At = {
  __typename?: 'PostsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionId = {
  __typename?: 'PostsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionPublished_At = {
  __typename?: 'PostsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionSlug = {
  __typename?: 'PostsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionTitle = {
  __typename?: 'PostsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionUpdated_At = {
  __typename?: 'PostsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionUser = {
  __typename?: 'PostsConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsConnectionViews = {
  __typename?: 'PostsConnectionViews';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<PostsConnection>;
};

export type PostsGroupBy = {
  __typename?: 'PostsGroupBy';
  id?: Maybe<Array<Maybe<PostsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PostsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PostsConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<PostsConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<PostsConnectionSlug>>>;
  content?: Maybe<Array<Maybe<PostsConnectionContent>>>;
  user?: Maybe<Array<Maybe<PostsConnectionUser>>>;
  views?: Maybe<Array<Maybe<PostsConnectionViews>>>;
  published_at?: Maybe<Array<Maybe<PostsConnectionPublished_At>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Category>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  post?: Maybe<Posts>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  postsConnection?: Maybe<PostsConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  displayName?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  displayName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Posts>>>;
};


export type UsersPermissionsUserPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionDisplayName = {
  __typename?: 'UsersPermissionsUserConnectionDisplayName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  displayName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionDisplayName>>>;
};

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
};

export type CreatePostInput = {
  data?: Maybe<PostInput>;
};

export type CreatePostPayload = {
  __typename?: 'createPostPayload';
  post?: Maybe<Posts>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeletePostInput = {
  where?: Maybe<InputId>;
};

export type DeletePostPayload = {
  __typename?: 'deletePostPayload';
  post?: Maybe<Posts>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditCategoryInput = {
  label?: Maybe<Scalars['String']>;
  hexColor?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPostInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  views?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  displayName?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCategoryInput>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdatePostInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPostInput>;
};

export type UpdatePostPayload = {
  __typename?: 'updatePostPayload';
  post?: Maybe<Posts>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type FindCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCategoriesQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & CategoryFragment
  )>>> }
);

export type CategoryFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'label' | 'hexColor'>
);

export type PostFragment = (
  { __typename?: 'Posts' }
  & Pick<Posts, 'title' | 'slug' | 'views' | 'content' | 'created_at'>
);

export type UserFragment = (
  { __typename?: 'UsersPermissionsUser' }
  & Pick<UsersPermissionsUser, 'id' | 'username' | 'email' | 'displayName'>
);

export type FindByCategoryQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type FindByCategoryQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & { categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & CategoryFragment
    )>>>, user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & UserFragment
    )> }
    & PostFragment
  )>>> }
);

export type FindLatestQueryVariables = Exact<{ [key: string]: never; }>;


export type FindLatestQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & { categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & CategoryFragment
    )>>>, user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & UserFragment
    )> }
    & PostFragment
  )>>> }
);

export type FindOneBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type FindOneBySlugQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & { categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & CategoryFragment
    )>>>, user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & UserFragment
    )> }
    & PostFragment
  )>>> }
);

export type FindOneByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type FindOneByTitleQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & { categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & CategoryFragment
    )>>>, user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & UserFragment
    )> }
    & PostFragment
  )>>> }
);

export type FindPopularQueryVariables = Exact<{ [key: string]: never; }>;


export type FindPopularQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & PostFragment
  )>>> }
);

export type FindLivePostsByCategoryQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type FindLivePostsByCategoryQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & { categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & CategoryFragment
    )>>>, user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & UserFragment
    )> }
    & PostFragment
  )>>> }
);

export type FindLivePostsByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type FindLivePostsByTitleQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & { categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & CategoryFragment
    )>>>, user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & UserFragment
    )> }
    & PostFragment
  )>>> }
);

export type FindLivePostsByUserQueryVariables = Exact<{
  user: Scalars['String'];
}>;


export type FindLivePostsByUserQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Posts' }
    & { categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & CategoryFragment
    )>>>, user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & UserFragment
    )> }
    & PostFragment
  )>>> }
);

export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  label
  hexColor
}
    `;
export const PostFragmentDoc = gql`
    fragment Post on Posts {
  title
  slug
  views
  content
  created_at
}
    `;
export const UserFragmentDoc = gql`
    fragment User on UsersPermissionsUser {
  id
  username
  email
  displayName
}
    `;
export const FindCategoriesDocument = gql`
    query FindCategories {
  categories {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useFindCategoriesQuery__
 *
 * To run a query within a React component, call `useFindCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FindCategoriesQuery, FindCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCategoriesQuery, FindCategoriesQueryVariables>(FindCategoriesDocument, options);
      }
export function useFindCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCategoriesQuery, FindCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCategoriesQuery, FindCategoriesQueryVariables>(FindCategoriesDocument, options);
        }
export type FindCategoriesQueryHookResult = ReturnType<typeof useFindCategoriesQuery>;
export type FindCategoriesLazyQueryHookResult = ReturnType<typeof useFindCategoriesLazyQuery>;
export type FindCategoriesQueryResult = Apollo.QueryResult<FindCategoriesQuery, FindCategoriesQueryVariables>;
export const FindByCategoryDocument = gql`
    query FindByCategory($category: String!) {
  posts(where: {categories: {label: $category}}) {
    ...Post
    categories {
      ...Category
    }
    user {
      ...User
    }
  }
}
    ${PostFragmentDoc}
${CategoryFragmentDoc}
${UserFragmentDoc}`;

/**
 * __useFindByCategoryQuery__
 *
 * To run a query within a React component, call `useFindByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindByCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useFindByCategoryQuery(baseOptions: Apollo.QueryHookOptions<FindByCategoryQuery, FindByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindByCategoryQuery, FindByCategoryQueryVariables>(FindByCategoryDocument, options);
      }
export function useFindByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindByCategoryQuery, FindByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindByCategoryQuery, FindByCategoryQueryVariables>(FindByCategoryDocument, options);
        }
export type FindByCategoryQueryHookResult = ReturnType<typeof useFindByCategoryQuery>;
export type FindByCategoryLazyQueryHookResult = ReturnType<typeof useFindByCategoryLazyQuery>;
export type FindByCategoryQueryResult = Apollo.QueryResult<FindByCategoryQuery, FindByCategoryQueryVariables>;
export const FindLatestDocument = gql`
    query FindLatest {
  posts(limit: 10, sort: "created_at:desc") {
    ...Post
    categories {
      ...Category
    }
    user {
      ...User
    }
  }
}
    ${PostFragmentDoc}
${CategoryFragmentDoc}
${UserFragmentDoc}`;

/**
 * __useFindLatestQuery__
 *
 * To run a query within a React component, call `useFindLatestQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLatestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLatestQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindLatestQuery(baseOptions?: Apollo.QueryHookOptions<FindLatestQuery, FindLatestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLatestQuery, FindLatestQueryVariables>(FindLatestDocument, options);
      }
export function useFindLatestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLatestQuery, FindLatestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLatestQuery, FindLatestQueryVariables>(FindLatestDocument, options);
        }
export type FindLatestQueryHookResult = ReturnType<typeof useFindLatestQuery>;
export type FindLatestLazyQueryHookResult = ReturnType<typeof useFindLatestLazyQuery>;
export type FindLatestQueryResult = Apollo.QueryResult<FindLatestQuery, FindLatestQueryVariables>;
export const FindOneBySlugDocument = gql`
    query FindOneBySlug($slug: String!) {
  posts(where: {slug: $slug}) {
    ...Post
    categories {
      ...Category
    }
    user {
      ...User
    }
  }
}
    ${PostFragmentDoc}
${CategoryFragmentDoc}
${UserFragmentDoc}`;

/**
 * __useFindOneBySlugQuery__
 *
 * To run a query within a React component, call `useFindOneBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindOneBySlugQuery(baseOptions: Apollo.QueryHookOptions<FindOneBySlugQuery, FindOneBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneBySlugQuery, FindOneBySlugQueryVariables>(FindOneBySlugDocument, options);
      }
export function useFindOneBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneBySlugQuery, FindOneBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneBySlugQuery, FindOneBySlugQueryVariables>(FindOneBySlugDocument, options);
        }
export type FindOneBySlugQueryHookResult = ReturnType<typeof useFindOneBySlugQuery>;
export type FindOneBySlugLazyQueryHookResult = ReturnType<typeof useFindOneBySlugLazyQuery>;
export type FindOneBySlugQueryResult = Apollo.QueryResult<FindOneBySlugQuery, FindOneBySlugQueryVariables>;
export const FindOneByTitleDocument = gql`
    query FindOneByTitle($title: String!) {
  posts(where: {title: $title}) {
    ...Post
    categories {
      ...Category
    }
    user {
      ...User
    }
  }
}
    ${PostFragmentDoc}
${CategoryFragmentDoc}
${UserFragmentDoc}`;

/**
 * __useFindOneByTitleQuery__
 *
 * To run a query within a React component, call `useFindOneByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useFindOneByTitleQuery(baseOptions: Apollo.QueryHookOptions<FindOneByTitleQuery, FindOneByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneByTitleQuery, FindOneByTitleQueryVariables>(FindOneByTitleDocument, options);
      }
export function useFindOneByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneByTitleQuery, FindOneByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneByTitleQuery, FindOneByTitleQueryVariables>(FindOneByTitleDocument, options);
        }
export type FindOneByTitleQueryHookResult = ReturnType<typeof useFindOneByTitleQuery>;
export type FindOneByTitleLazyQueryHookResult = ReturnType<typeof useFindOneByTitleLazyQuery>;
export type FindOneByTitleQueryResult = Apollo.QueryResult<FindOneByTitleQuery, FindOneByTitleQueryVariables>;
export const FindPopularDocument = gql`
    query FindPopular {
  posts(limit: 5, sort: "views:desc") {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useFindPopularQuery__
 *
 * To run a query within a React component, call `useFindPopularQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPopularQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPopularQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindPopularQuery(baseOptions?: Apollo.QueryHookOptions<FindPopularQuery, FindPopularQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPopularQuery, FindPopularQueryVariables>(FindPopularDocument, options);
      }
export function useFindPopularLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPopularQuery, FindPopularQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPopularQuery, FindPopularQueryVariables>(FindPopularDocument, options);
        }
export type FindPopularQueryHookResult = ReturnType<typeof useFindPopularQuery>;
export type FindPopularLazyQueryHookResult = ReturnType<typeof useFindPopularLazyQuery>;
export type FindPopularQueryResult = Apollo.QueryResult<FindPopularQuery, FindPopularQueryVariables>;
export const FindLivePostsByCategoryDocument = gql`
    query FindLivePostsByCategory($category: String!) {
  posts(where: {categories: {label_contains: $category}}) {
    ...Post
    categories {
      ...Category
    }
    user {
      ...User
    }
  }
}
    ${PostFragmentDoc}
${CategoryFragmentDoc}
${UserFragmentDoc}`;

/**
 * __useFindLivePostsByCategoryQuery__
 *
 * To run a query within a React component, call `useFindLivePostsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLivePostsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLivePostsByCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useFindLivePostsByCategoryQuery(baseOptions: Apollo.QueryHookOptions<FindLivePostsByCategoryQuery, FindLivePostsByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLivePostsByCategoryQuery, FindLivePostsByCategoryQueryVariables>(FindLivePostsByCategoryDocument, options);
      }
export function useFindLivePostsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLivePostsByCategoryQuery, FindLivePostsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLivePostsByCategoryQuery, FindLivePostsByCategoryQueryVariables>(FindLivePostsByCategoryDocument, options);
        }
export type FindLivePostsByCategoryQueryHookResult = ReturnType<typeof useFindLivePostsByCategoryQuery>;
export type FindLivePostsByCategoryLazyQueryHookResult = ReturnType<typeof useFindLivePostsByCategoryLazyQuery>;
export type FindLivePostsByCategoryQueryResult = Apollo.QueryResult<FindLivePostsByCategoryQuery, FindLivePostsByCategoryQueryVariables>;
export const FindLivePostsByTitleDocument = gql`
    query FindLivePostsByTitle($title: String!) {
  posts(where: {title_contains: $title}) {
    ...Post
    categories {
      ...Category
    }
    user {
      ...User
    }
  }
}
    ${PostFragmentDoc}
${CategoryFragmentDoc}
${UserFragmentDoc}`;

/**
 * __useFindLivePostsByTitleQuery__
 *
 * To run a query within a React component, call `useFindLivePostsByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLivePostsByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLivePostsByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useFindLivePostsByTitleQuery(baseOptions: Apollo.QueryHookOptions<FindLivePostsByTitleQuery, FindLivePostsByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLivePostsByTitleQuery, FindLivePostsByTitleQueryVariables>(FindLivePostsByTitleDocument, options);
      }
export function useFindLivePostsByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLivePostsByTitleQuery, FindLivePostsByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLivePostsByTitleQuery, FindLivePostsByTitleQueryVariables>(FindLivePostsByTitleDocument, options);
        }
export type FindLivePostsByTitleQueryHookResult = ReturnType<typeof useFindLivePostsByTitleQuery>;
export type FindLivePostsByTitleLazyQueryHookResult = ReturnType<typeof useFindLivePostsByTitleLazyQuery>;
export type FindLivePostsByTitleQueryResult = Apollo.QueryResult<FindLivePostsByTitleQuery, FindLivePostsByTitleQueryVariables>;
export const FindLivePostsByUserDocument = gql`
    query FindLivePostsByUser($user: String!) {
  posts(where: {user: {username_contains: $user}}) {
    ...Post
    categories {
      ...Category
    }
    user {
      ...User
    }
  }
}
    ${PostFragmentDoc}
${CategoryFragmentDoc}
${UserFragmentDoc}`;

/**
 * __useFindLivePostsByUserQuery__
 *
 * To run a query within a React component, call `useFindLivePostsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLivePostsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLivePostsByUserQuery({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useFindLivePostsByUserQuery(baseOptions: Apollo.QueryHookOptions<FindLivePostsByUserQuery, FindLivePostsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLivePostsByUserQuery, FindLivePostsByUserQueryVariables>(FindLivePostsByUserDocument, options);
      }
export function useFindLivePostsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLivePostsByUserQuery, FindLivePostsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLivePostsByUserQuery, FindLivePostsByUserQueryVariables>(FindLivePostsByUserDocument, options);
        }
export type FindLivePostsByUserQueryHookResult = ReturnType<typeof useFindLivePostsByUserQuery>;
export type FindLivePostsByUserLazyQueryHookResult = ReturnType<typeof useFindLivePostsByUserLazyQuery>;
export type FindLivePostsByUserQueryResult = Apollo.QueryResult<FindLivePostsByUserQuery, FindLivePostsByUserQueryVariables>;