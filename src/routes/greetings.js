function GET(req, res, payload, body) {
  res.writeHead(200, {
    'Content-type': 'application/xml'
  })

  res.end(
    '<response><data><element><tag>h1</tag><content>Welcome to the server</content></element></data></response>'
  )
}

function OPTIONS(req, res, payload, body) {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end()
}

function POST(req, res, payload, body) {
  res.json(payload)
}

export { GET, OPTIONS, POST }
