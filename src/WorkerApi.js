import { dataService } from './Core/services/dataService.js'

import { HTTP_STATUS_OK, 
  HTTP_STATUS_UNAUTHORIZED, 
  HTTP_STATUS_NO_CONTENT,
  HTTP_STATUS_NOT_FOUND, 
  HTTP_STATUS_METHOD_NOT_ALLOWED,
  HTTP_METHOD_OPTIONS,
  HTTP_METHOD_GET,
  jsonResponse
} from './lib/utils.js'


export default {
  async fetch(request, env) {
    // Preflight CORS: los navegadores envían OPTIONS antes de un fetch cross-origin.
    if (request.method === HTTP_METHOD_OPTIONS) {
      return jsonResponse(null, HTTP_STATUS_NO_CONTENT)
    }
    const url = new URL(request.url)
    const { pathname } = url

    // Rutas de la API
    if (pathname.startsWith('/api/')) {
        //security: check for the custom header and its value
        const key = request.headers.get(env.API_HEADER_VAR_NAME)      
        if (!key || key !== env.VITE_X_API_VAR_VALUE) return jsonResponse({ error: 'Unauthorized' }, HTTP_STATUS_UNAUTHORIZED)
        //security: check for the request method
        if(request.method !== HTTP_METHOD_GET) return jsonResponse({ error: 'Method not allowed' }, HTTP_STATUS_METHOD_NOT_ALLOWED)          
        // Rutas de la API
        if (pathname === '/api' || pathname === '/api/health') return jsonResponse({ message: 'API is working' })        
        if (pathname === '/api/cards') return jsonResponse(await dataService.getTarjetas())
        if (pathname === '/api/posts') return jsonResponse(await dataService.getPosts())
        if (pathname === '/api/metrics') return jsonResponse(await dataService.getMetrics())
        if (pathname === '/api/contacts') return jsonResponse(await dataService.getContacts())

        const match = pathname.match(/^\/api\/posts\/([^/]+)$/)
        if (match) {
          const post = await dataService.getPostById(match[1])
        if (!post) return jsonResponse({ error: 'Not found' }, HTTP_STATUS_NOT_FOUND)
          return jsonResponse(post)
        }

        // /api/* desconocido → 404 JSON (no index.html)
        return jsonResponse({ error: 'Not found' }, HTTP_STATUS_NOT_FOUND)
    }

    // Todo lo demás → SPA
    return env.ASSETS.fetch(request)
  },
}