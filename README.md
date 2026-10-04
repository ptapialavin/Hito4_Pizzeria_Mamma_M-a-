# Pizzería Mamma Mía

#Link del Deploy: (pendiente — requiere backend corriendo, ver sección "Backend")

Landing page de una pizzería ficticia, hecha con React y Vite. En este hito se implementó el consumo de una API externa: el catálogo de pizzas y el detalle de una pizza ya no vienen de un array local, sino que se obtienen en tiempo real desde un backend (Node.js + Express) mediante `fetch` dentro de `useEffect`.

Proyecto correspondiente al Hito 4 del módulo de Consumo de APIs con React de Desafío Latam (continuación del Hito 3).

## Backend

Este proyecto necesita un backend corriendo en `http://localhost:5000` para funcionar (API de pizzas). El backend es el material de apoyo entregado por el curso (no forma parte de este repositorio, ya que no se modificó su lógica, solo se corrigieron las URLs de imágenes rotas del archivo `db/pizzas.json`).

Para levantarlo:
1. Descarga el backend de apoyo ("Backend Pizzas").
2. `npm install`
3. `npm start` → queda escuchando en el puerto 5000.

Endpoints usados en este hito:
- `GET http://localhost:5000/api/pizzas` → listado de pizzas.
- `GET http://localhost:5000/api/pizzas/p001` → detalle de una pizza puntual.

## Cómo usarlo

Con el backend corriendo, al abrir la app se muestra el Navbar y, debajo, el detalle de una pizza puntual (Pizza.jsx) consumido desde la API: nombre, descripción, ingredientes, imagen y precio. El botón "Añadir al carrito" todavía no tiene funcionalidad (se implementará en un hito futuro).

Los componentes `Home`, `LoginPage`, `RegisterPage` y `Cart` de hitos anteriores se mantienen en el proyecto (no se eliminaron) pero quedan comentados en `App.jsx`. `Home.jsx` también fue actualizado para consumir la API (en vez del array estático), y se puede ver activándolo temporalmente en `App.jsx`.

## Tecnologías

React · Vite · Bootstrap 5 · JavaScript (`fetch`, `useEffect`, `useState`, props, renderizado dinámico con `.map()`) · Backend de apoyo en Node.js + Express

## Estructura

Hito4_Pizzeria_Mamma_Mía/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── CardPizza.jsx
│   │   ├── Pizza.jsx
│   │   ├── Cart.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── pizzas.js
│   ├── utils/
│   │   └── formatNumber.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── README.md

## Ejecutar

npm install
npm run dev

(requiere el backend corriendo en paralelo, ver sección "Backend")

## Requerimientos de la prueba

| # | Requerimiento | Dónde se cumple |
|---|---|---|
| 1 | `Home.jsx` consume la API de pizzas y renderiza las tarjetas | Home.jsx |
| 2 | `Home.jsx` utiliza el hook `useEffect` para consumir la API | Home.jsx |
| 3 | `Pizza.jsx` consume la API de pizzas y renderiza la información de la pizza | Pizza.jsx |
| 4 | `Pizza.jsx` utiliza el hook `useEffect` para consumir la API | Pizza.jsx |
| 5 | `Pizza.jsx` muestra nombre, precio, ingredientes, imagen y descripción | Pizza.jsx |

## Autor

Patricio Tapia L. — Proyecto desarrollado para el módulo de Consumo de APIs con React del curso Desarrollo Full Stack de Desafío Latam.
