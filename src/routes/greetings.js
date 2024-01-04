function GET(req, res, payload, body) {
  res.writeHead(200, {
    'Content-type': 'application/xml'
  })

  res.end(
    '<response><data><element><tag>h1</tag><content>Welcome to the server</content></element></data></response>'
  )
}

export { GET }
