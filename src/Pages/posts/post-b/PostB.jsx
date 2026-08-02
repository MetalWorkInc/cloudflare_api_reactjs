import { useFetch } from '../../../Core/hooks/useFetch.js'
import { getPostById } from '../../../Apis/posts.js'

export default function PostB() {
  const { data: post, loading, error } = useFetch(() => getPostById('post-b'))

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
