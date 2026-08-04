import { environment } from '../Core/constants/config.js'
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {year} {environment.APP_NAME} v{environment.APP_VERSION} — Desplegado en Cloudflare Pages</p>
    </footer>
  )
}
