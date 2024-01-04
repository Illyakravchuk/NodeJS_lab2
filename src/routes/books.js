function GET(req, res, payload, body) {
  const books = [
    { title: 'Кобзар', author: ' Тарас Шевченко' },
    { title: 'Маруся Чурай', author: 'Панас Мирний' },
    { title: 'Межиріччя', author: 'Остап Вишня' }
  ]

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.json(books)
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
