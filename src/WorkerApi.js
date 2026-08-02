import { dataService } from './Core/services/dataService.js'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  })


export default {
  async fetch(request, env) {
    // Preflight CORS: los navegadores envían OPTIONS antes de un fetch cross-origin.
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS })
    }

    const url = new URL(request.url)
    const { pathname } = url

    // Rutas de la API
    if (pathname.startsWith('/api/')) {
        if (pathname === '/api/cards') return json(await dataService.getTarjetas())
        if (pathname === '/api/posts') return json(await dataService.getPosts())
        if (pathname === '/api/metrics') return json(await dataService.getMetrics())
        if (pathname === '/api/contacts') return json(await dataService.getContacts())

        const match = pathname.match(/^\/api\/posts\/([^/]+)$/)
        if (match) {
          const post = await dataService.getPostById(match[1])
        if (!post) return json({ error: 'Not found' }, 404)
          return json(post)
        }

        // /api/* desconocido → 404 JSON (no index.html)
        return json({ error: 'Not found' }, 404)
    }

    // Todo lo demás → SPA
    return env.ASSETS.fetch(request)
  },
}