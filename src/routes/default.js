function defaultHandler(req, res, payload, body) {
  const defaultPage =
    '<h1>Welcome to the default page</h1><p>available routers:</p><ul><li>/information</li><li>/greetings</li><li>/weather</li><li>/books</li></ul>'

  res.writeHead(200, {
    'Content-Type': 'text/html'
  })

  res.end(defaultPage)
}

export { defaultHandler }
