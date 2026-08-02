export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {year} CloudApp — Desplegado en Cloudflare Pages</p>
    </footer>
  )
}
