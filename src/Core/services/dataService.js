import { Card } from '../dataobjects/Card.js'
import { Metric } from '../dataobjects/Metric.js'

const tarjetas = [
  new Card(1, 'Introducción a React', 'Aprende los fundamentos de React 18 con hooks y componentes funcionales.', 'React'),
  new Card(2, 'Vite para desarrollo rápido', 'Configura y optimiza tu entorno de desarrollo con Vite.', 'Vite'),
  new Card(3, 'React Router v6', 'Implementa navegación declarativa en aplicaciones React con React Router v6.', 'Routing'),
  new Card(4, 'Cloudflare Pages', 'Despliega aplicaciones React estáticas en Cloudflare Pages.', 'Deployment'),
  new Card(5, 'Custom Hooks', 'Crea hooks personalizados para reutilizar lógica de estado y efectos.', 'React'),
  new Card(6, 'Consumo de APIs', 'Consume APIs REST desde React usando fetch y hooks de datos.', 'API'),
]

const metrics = [
  new Metric(1, 'Usuarios activos', 1240, 'usuarios'),
  new Metric(2, 'Peticiones hoy', 8530, 'req/día'),
  new Metric(3, 'Uptime', 99.9, '%'),
  new Metric(4, 'Latencia media', 42, 'ms'),
]

const posts = [
  {
    id: 'post-a',
    title: 'Post A: Arquitectura de micro-frontends',
    excerpt: 'Exploramos cómo dividir una aplicación en módulos independientes desplegables por separado.',
    body: 'Los micro-frontends permiten que equipos distintos trabajen en paralelo sobre partes autónomas de la UI, cada una con su propio stack de tecnología, proceso de build y ciclo de despliegue independiente.',
  },
  {
    id: 'post-b',
    title: 'Post B: Integración Angular + React',
    excerpt: 'Cómo comunicar una app Angular alojada en GitHub Pages con módulos React en Cloudflare Pages.',
    body: 'Mediante iframes y mensajes postMessage, o simplemente con enlaces directos a rutas públicas, podemos integrar contenido React dentro de una shell Angular manteniendo aislamiento de dominio y consistencia visual.',
  },
]

export const dataService = {
  getTarjetas: () => Promise.resolve([...tarjetas]),
  getMetrics: () => Promise.resolve([...metrics]),
  getPosts: () => Promise.resolve([...posts]),
  getPostById: (id) => Promise.resolve(posts.find((p) => p.id === id) || null),
}
