import sanity from "../../services/sanity"

const checkIfAuthorized = async (slug) => {
  if (slug === '/') return true
  const parts = slug.split('/')
  // console.log(parts)
  if (parts.length === 2 && checkIfSlugIsKnown(parts[1])) return true
  if (parts.length === 3 && checkIfSlugIsKnown(parts[1])) {
    const exists = await checkIfPreviewSlugExists(parts[2])
    return exists
  }
  return false
}

const checkIfSlugIsKnown = (slug) => {
  const globalSlugs = [
    'home',
    'about',
    'news',
    'downloads',
    'caseStudy',
  ]
  return globalSlugs.includes(slug)
}

const checkIfPreviewSlugExists = (slug) => {
  sanity.setPreviewMode(true)
  return sanity.checkIfSlugExists(slug)
}

const preview = async (req, res) => {
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  
  // We check here to prevent the preview mode from being missused / open redirect vulnerabilities
  // const isAuthorized = await checkIfAuthorized(req.query.slug)
  // if (!isAuthorized) return res.status(401).json({ message: 'Invalid slug' })

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})
  res.writeHead(307, { Location: req.query.slug })
  res.end()
}

export default preview
