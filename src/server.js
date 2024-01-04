import http from 'http'
import { URL } from 'url'
import { parseJSON } from './utils.js'
import { router } from './router.js'
import helpers from './helpers.js'

const contentParsers = {
  'text/html': (text) => text,
  'application/json': (json) => parseJSON(json, {}),
  'application/x-www-form-urlencoded': (data) =>
    Object.fromEntries(new URLSearchParams(data))
}

const server = http
  .createServer((req, res) => {
    const requestUrl = new URL(req.url || '/', `http://${req.headers.host}`)
    let requestBody = ''

    const processRequestData = () => {
      if (req.headers['content-type']) {
        const contentType = req.headers['content-type'].split(';')[0]
        if (contentParsers[contentType]) {
          try {
            const parsedPayload = contentParsers[contentType](requestBody)
            router(
              req,
              Object.assign(res, helpers),
              requestUrl,
              parsedPayload,
              requestBody
            )
          } catch (error) {
            handleError(res, error)
          }
        } else {
          handleError(res, new Error('Unsupported content type'))
        }
      } else {
        router(req, Object.assign(res, helpers), requestUrl, {}, requestBody)
      }
    }

    req.on('data', (chunk) => {
      requestBody += chunk.toString()
    })

    req.on('end', processRequestData)
  })
  .on('error', (error) => {
    console.error('Error: ', error)
  })

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})

process.on('SIGINT', () => {
  server.close((error) => {
    if (error) {
      console.error(error)
      process.exit(1)
    }
  })
})

function handleError(res, error) {
  console.error(error)
  res.writeHead(500, {
    'Content-Type': 'text/html'
  })
  res.end('<h1>Server error</h1>')
}
