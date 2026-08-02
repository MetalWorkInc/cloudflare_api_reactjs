export default function Card({ title, description, tag }) {
  return (
    <article className="card">
      {tag && <span className="card-tag">{tag}</span>}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </article>
  )
}
