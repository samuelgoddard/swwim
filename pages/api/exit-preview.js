export default async function exit(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()
  // console.log(req.query.currentRoute)
  // Redirect the user back to the index page.
  res.writeHead(307, { Location: req.query.currentRoute })
  res.end()
}