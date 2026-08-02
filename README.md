# cloudflare_api_reactjs

Aplicación React 18 + Vite desplegada en **Cloudflare Pages**. Su contenido puede ser consumido desde una app Angular alojada en GitHub Pages mediante enlaces directos o iframes.

## Requisitos

- [Node.js LTS](https://nodejs.org/) (v18 o superior recomendado)
- npm (incluido con Node.js)

## Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Generar build de producción
npm run build

# Previsualizar el build
npm run preview
```

## Rutas disponibles

| Ruta | Acceso | Descripción |
|---|---|---|
| `/` | Público | Página de inicio |
| `/tarjetas` | Público | Grilla de tarjetas de recursos |
| `/posts/post-a` | Público | Post A |
| `/posts/post-b` | Público | Post B |
| `/secure/dashboard` | Protegido | Métricas del sistema |
| `/secure/contactos` | Protegido | Directorio de contactos |

Las rutas `/secure/*` requieren sesión activa. Usa el botón **Iniciar sesión** en la barra de navegación para habilitar una sesión de demostración.

## Estructura del proyecto

```
src/
├── main.jsx                    # Punto de entrada con BrowserRouter
├── App.jsx                     # Definición de rutas
├── index.css / App.css         # Estilos globales
├── Core/                       # Infraestructura transversal
│   ├── constants/              # routes.js, config.js
│   ├── dataobjects/            # Card.js, Metric.js
│   ├── guards/                 # ProtectedRoute.jsx
│   ├── hooks/                  # useFetch.js, useAuth.js
│   ├── interceptors/           # http.interceptor.js
│   ├── middlewares/            # authCheck.js, logger.js
│   ├── services/               # api.js, dataService.js
│   └── utils/                  # formatters.js, validators.js
├── Components/                 # UI reutilizable
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   └── Navbar.jsx
└── Pages/                      # Una carpeta por página
    ├── public/home/Home.jsx
    ├── public/tarjetas/Tarjetas.jsx
    ├── posts/post-a/PostA.jsx
    ├── posts/post-b/PostB.jsx
    ├── secure/dashboard/Dashboard.jsx
    └── secure/contactos/Contactos.jsx
public/
└── _redirects                  # SPA redirect para Cloudflare Pages
```

## Despliegue en Cloudflare Pages

1. Haz push del repositorio a GitHub.
2. En [Cloudflare Pages](https://pages.cloudflare.com/), crea un nuevo proyecto conectado a tu repo.
3. Configura los ajustes de build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Despliega. El archivo `public/_redirects` garantiza que todas las rutas SPA devuelvan `index.html` con código 200.

