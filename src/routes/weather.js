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

export { GET }
