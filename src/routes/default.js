function defaultHandler(req, res, payload, body) {
  const defaultPage = '<h1>Method Not Implemented</h1>'

  res.writeHead(200, {
    'Content-Type': 'text/html'
  })

  res.end(defaultPage)
}

export { defaultHandler }
