import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import NotFound from './Pages/404/NotFound.jsx'
import Home from './Pages/public/home/Home.jsx'
import Tarjetas from './Pages/public/tarjetas/Tarjetas.jsx'
import PostA from './Pages/posts/post-a/PostA.jsx'
import PostB from './Pages/posts/post-b/PostB.jsx'
import Dashboard from './Pages/secure/dashboard/Dashboard.jsx'
import Contactos from './Pages/secure/contactos/Contactos.jsx'
import ProtectedRoute from './Core/guards/ProtectedRoute.jsx'
import './App.css'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarjetas" element={<Tarjetas />} />
        <Route path="/posts/post-a" element={<PostA />} />
        <Route path="/posts/post-b" element={<PostB />} />
        <Route path="/secure/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
        <Route path="/secure/contactos" element={ <ProtectedRoute> <Contactos /> </ProtectedRoute> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
