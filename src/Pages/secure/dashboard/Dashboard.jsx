import { useFetch } from '../../../Core/hooks/useFetch.js'
import { getMetrics } from '../../../Apis/metrics.js'
import { formatNumber } from '../../../Core/utils/formatters.js'

export default function Dashboard() {
  const { data: metrics, loading, error } = useFetch(() => getMetrics())

  if (loading) return <p className="page">Cargando métricas…</p>
  if (error) return <p className="page">Error: {error}</p>

  return (
    <section className="page">
      <h1>Dashboard</h1>
      <p>Panel de métricas del sistema (área segura).</p>
      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div key={metric.id} className="metric-card">
            <div className="metric-value">{formatNumber(metric.value)}</div>
            <div className="metric-label">
              {metric.label} <span>({metric.unit})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
