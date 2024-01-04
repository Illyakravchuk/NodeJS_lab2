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

export { GET }
