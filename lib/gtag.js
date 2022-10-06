export const GTM_ID = 'GTM-TDPMVPB'

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}