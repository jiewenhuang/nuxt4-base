import type { PostList } from '~/type/postList'
export const getPostList = () => {
  const url = '/apis/api.content.halo.run/v1alpha1/posts'

  // 使用 `useHttp` 封装的 `get` 方法发起请求
  return useHttp.get<PostList>(url, undefined)
}
