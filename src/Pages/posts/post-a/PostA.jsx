import { useFetch } from '../../../Core/hooks/useFetch.js'
import { dataService } from '../../../Core/services/dataService.js'

export default function PostA() {
  const { data: post, loading, error } = useFetch(() => dataService.getPostById('post-a'))

  if (loading) return <p className="page">Cargando…</p>
  if (error) return <p className="page">Error: {error}</p>
  if (!post) return <p className="page">Post no encontrado.</p>

  return (
    <section className="page">
      <h1>{post.title}</h1>
      <div className="post-content">
        <h2>{post.excerpt}</h2>
        <p>{post.body}</p>
      </div>
    </section>
  )
}
