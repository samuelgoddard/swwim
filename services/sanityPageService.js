import sanity from "./sanity"

export default class SanityPageService {
  query = ''

  constructor(query) {
    this.query = query || this.query
  }
  
  getPreviewHook(initialData = {}, params = {}) {
    const subscription = { initialData, enabled: initialData.preview, params: {} }
    subscription.params = params
    if (initialData.slug?.length > 0) subscription.params.slug = initialData.slug
    return () => sanity.usePreviewSubscription(this.query, subscription)
  }

  // async fetchQuery ({params, preview = false}) {
  //   sanity.setPreviewMode(preview)
  //   const slug = params?.slug
  //   const res = await sanity.fetchQuery({query: this.query, params})
  //   res.preview = preview
  //   if (slug?.length > 0) res.slug = slug
  //   return res
  // }

  async fetchQuery ({params, preview = false}) {
    sanity.setPreviewMode(preview)
    const slug = params?.slug
    const res = await sanity.fetchQuery({query: this.query, params})
    const notFound = !res
    const props = res || {}

    props.preview = preview
    if (slug?.length > 0) props.slug = slug
    return { props, notFound }
  }
  
  async fetchQuery ({params, preview = false}) {
    sanity.setPreviewMode(preview)
    const slug = params?.slug
    const res = await sanity.fetchQuery({query: this.query, params})
    const notFound = !res
    const props = res || {}

    props.preview = preview
    if (slug?.length > 0) props.slug = slug
    return { props, notFound }
  }

  fetchPaths(schemaType) {
    const query = `*[_type == "${schemaType}" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
    return sanity.fetchQuery({query})
  }

  // fetchPaths(schemaType) {
  //   const query = `*[_type == "${schemaType}" && defined(slug.current)]{
  //     "params": {
  //       "slug": slug.current
  //     }
  //   }`
  //   return sanity.fetchQuery({query})
  // }
}