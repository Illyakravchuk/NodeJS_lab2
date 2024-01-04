import { defaultHandler } from './routes/default.js'
import { fileURLToPath, pathToFileURL } from 'url'
import path from 'path'

const currentFilePath = fileURLToPath(import.meta.url)
const currentDirPath = path.dirname(currentFilePath)

async function router(req, res, url, payload, body) {
  try {
    let modulePath = ''
    const requestMethod = req.method
    const urlPath = url.pathname

    const validRoutes = ['information', 'greetings', 'weather', 'books']
    const index = validRoutes.indexOf(urlPath.replace('/', ''))

    if (index >= 0) {
      const routeFile = `routes/${validRoutes[index]}.js`
      modulePath = pathToFileURL(path.resolve(currentDirPath, routeFile))
    } else {
      defaultHandler(req, res, payload, body)
      return
    }

    const { [requestMethod]: handler } = await import(modulePath)

    if (handler) {
      handler(req, res, payload, body)
    }
  } catch (e) {
    console.error(e)
    res.writeHead(500, {
      'Content-Type': 'text/html'
    })
    res.end('<h1>Server error</h1>')
  }
}

export { router }
