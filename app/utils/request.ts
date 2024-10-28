import type { FetchError, FetchResponse, SearchParameters } from 'ofetch'
import { hash } from 'ohash'
import type { AsyncData, UseFetchOptions } from '#app'
import type { KeysOf } from '#app/composables/asyncData'

type UrlType =
  | string
  | Request
  | Ref<string | Request>
  | (() => string | Request)

type HttpOption<T> = UseFetchOptions<T, T, KeysOf<T>, any>

function handleError<T>(
  _method: string | undefined,
  _response: FetchResponse<T> & FetchResponse<any>
) {
  // Implement error handling logic here
  console.error(`[useHttp] [error] ${_method}:`, _response)
}

function checkRef(obj: Record<string, any>) {
  return Object.keys(obj).some(key => isRef(obj[key]))
}

function fetch<T>(
  url: UrlType,
  opts: HttpOption<T>
): AsyncData<T, FetchError<T>> {
  // Check the `key` option
  const { key, params, watch } = opts
  if (!key && ((params && checkRef(params)) || (watch && checkRef(watch))))
    console.error(
      '\x1B[31m%s\x1B[0m %s',
      '[useHttp] [error]',
      'The `key` option is required when `params` or `watch` has ref properties, please set a unique key for the current request.'
    )

  const options = opts as UseFetchOptions<T>
  options.lazy = options.lazy ?? true

  const { baseUrl } = useRuntimeConfig().public

  return useFetch(url, {
    // Request interception
    onRequest({ options }) {
      options.baseURL = baseUrl as string
      // Set the base URL
    },
    // Response interception
    onResponse(_context) {
      // Handle the response
    },
    // Error interception
    onResponseError({ response, options: { method } }) {
      handleError<T>(method, response)
    },
    // Set the cache key
    key:
      key ??
      hash([
        'api-fetch',
        url,
        JSON.stringify({ method: options.method, params: options.params })
      ]),
    // Merge the options
    ...options
  }) as AsyncData<T, FetchError<T>>
}

export const useHttp = {
  get: <T>(url: UrlType, params?: SearchParameters, option?: HttpOption<T>) => {
    return fetch<T>(url, { method: 'get', params, ...option })
  },

  post: <T>(
    url: UrlType,
    body?: RequestInit['body'] | Record<string, any>,
    option?: HttpOption<T>
  ) => {
    return fetch<T>(url, { method: 'post', body, ...option })
  },

  put: <T>(
    url: UrlType,
    body?: RequestInit['body'] | Record<string, any>,
    option?: HttpOption<T>
  ) => {
    return fetch<T>(url, { method: 'put', body, ...option })
  },

  delete: <T>(
    url: UrlType,
    body?: RequestInit['body'] | Record<string, any>,
    option?: HttpOption<T>
  ) => {
    return fetch<T>(url, { method: 'delete', body, ...option })
  }
}
