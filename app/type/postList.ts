export interface PostList {
  page: number
  size: number
  total: number
  items: Item[]
  first: boolean
  last: boolean
  hasNext: boolean
  hasPrevious: boolean
  totalPages: number
}
interface Item {
  metadata: Metadata
  spec: Spec
  status: Status
  categories: (Category | Categories2 | Categories3)[]
  tags: (Tag | Tags2)[]
  contributors: Contributor[]
  owner: Contributor
  stats: Stats
}
interface Stats {
  visit: number
  upvote: number
  comment: number
}
interface Contributor {
  name: string
  displayName: string
  permalink: string
  metadata: Metadata7
  bio?: string
}
interface Metadata7 {
  finalizers: string[]
  name: string
  annotations: Annotations4
  version: number
  creationTimestamp: string
}
interface Annotations4 {
  'rbac.authorization.halo.run/role-names': string
}
interface Tags2 {
  metadata: Metadata6
  spec: Spec5
  status: Status3
  postCount: number
}
interface Metadata6 {
  finalizers: string[]
  name: string
  annotations: Annotations3
  version: number
  creationTimestamp: string
}
interface Tag {
  metadata: Metadata5
  spec: Spec5
  status: Status3
  postCount: number
}
interface Status3 {
  permalink: string
  visiblePostCount: number
  postCount: number
  observedVersion: number
}
interface Spec5 {
  displayName: string
  slug: string
  color: string
  cover: string
}
interface Metadata5 {
  generateName: string
  finalizers: string[]
  name: string
  annotations: Annotations3
  version: number
  creationTimestamp: string
}
interface Annotations3 {
  'content.halo.run/permalink-pattern': string
}
interface Categories3 {
  metadata: Metadata4
  spec: Spec4
  status: Status2
  postCount: number
}
interface Spec4 {
  displayName: string
  slug: string
  description: string
  cover: string
  template: string
  priority: number
  children: string[]
  preventParentPostCascadeQuery: boolean
  hideFromList: boolean
}
interface Metadata4 {
  finalizers: string[]
  name: string
  annotations: Annotations2
  version: number
  creationTimestamp: string
}
interface Categories2 {
  metadata: Metadata3
  spec: Spec3
  status: Status2
  postCount: number
}
interface Spec3 {
  displayName: string
  slug: string
  description: string
  cover: string
  template: string
  priority: number
  children: any[]
  preventParentPostCascadeQuery: boolean
  hideFromList: boolean
}
interface Metadata3 {
  generateName: string
  finalizers: string[]
  name: string
  annotations: Annotations2
  version: number
  creationTimestamp: string
}
interface Category {
  metadata: Metadata2
  spec: Spec2
  status: Status2
  postCount: number
}
interface Status2 {
  permalink: string
  postCount: number
  visiblePostCount: number
}
interface Spec2 {
  displayName: string
  slug: string
  description: string
  cover: string
  template: string
  priority: number
  children: string[]
  preventParentPostCascadeQuery: boolean
  hideFromList: boolean
}
interface Metadata2 {
  finalizers: string[]
  name: string
  annotations: Annotations2
  version: number
  creationTimestamp: string
  generateName?: string
}
interface Annotations2 {
  'content.halo.run/permalink-pattern': string
  'content.halo.run/last-hidden-state': string
}
interface Status {
  phase: string
  conditions: Condition[]
  permalink: string
  excerpt: string
  inProgress: boolean
  contributors: string[]
  hideFromList: boolean
  lastModifyTime: string
  observedVersion: number
}
interface Condition {
  type: string
  status: string
  lastTransitionTime: string
  message: string
  reason: string
}
interface Spec {
  title: string
  slug: string
  releaseSnapshot: string
  headSnapshot: string
  baseSnapshot: string
  owner: string
  template: string
  cover: string
  deleted: boolean
  publish: boolean
  publishTime: string
  pinned: boolean
  allowComment: boolean
  visible: string
  priority: number
  excerpt: Excerpt
  categories: string[]
  tags: string[]
  htmlMetas: any[]
}
interface Excerpt {
  autoGenerate: boolean
  raw: string
}
interface Metadata {
  finalizers: string[]
  name: string
  labels: Labels
  annotations: Annotations
  version: number
  creationTimestamp: string
}
interface Annotations {
  'content.halo.run/preferred-editor': string
  'checksum/config': string
  'content.halo.run/permalink-pattern': string
  'content.halo.run/last-released-snapshot': string
  fullTitle?: string
  app_rating?: string
  app_version?: string
  app_os?: string
  app_developer?: string
  app_age?: string
  app_download_url?: string
  restrict_type?: string
  answerLabel?: string
  answerVal?: string
  'content.halo.run/stats'?: string
  enable_aside?: string
  enable_page_meta?: string
  enable_passage_tips?: string
  enable_collect_check?: string
  enable_read_limit?: string
  use_raw_content?: string
  enable_comment?: string
  enable_toc?: string
  toc_depth?: string
  img_max_width?: string
  img_align?: string
  enable_copy?: string
  enable_donate?: string
  enable_share?: string
  enable_like?: string
  enable_fold_long_code?: string
}
interface Labels {
  'content.halo.run/published': string
  'content.halo.run/deleted': string
  'content.halo.run/owner': string
  'content.halo.run/visible': string
  'content.halo.run/archive-year': string
  'content.halo.run/archive-month': string
  'content.halo.run/archive-day': string
}
