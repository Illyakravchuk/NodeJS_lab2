function GET(req, res, payload, body) {
  const information =
    '<h2>Lab 2 NodeJS</h2><p>Executed</p><p>Illya Kravchuk, a third-year student of the IM-13 group.</p>'

  res.writeHead(200, {
    'Content-Type': 'text/html'
  })

  res.end(information)
}

export { GET }
