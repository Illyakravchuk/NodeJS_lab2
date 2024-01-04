function GET(req, res, payload, body) {
  const weatherData = {
    temperature: 25,
    condition: 'Sunny',
    humidity: '75%',
    vice: 737
  }

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.json(weatherData)
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
