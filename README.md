
# Shopping Cart 🛒

Aplicación web profesional de carrito de compras desarrollada con React y Vite. Permite a los usuarios explorar productos, agregarlos al carrito, modificar cantidades y gestionar la compra de manera intuitiva y eficiente.

## Funcionalidades principales
- Visualización de productos con detalles y precios.
- Agregar, eliminar y modificar la cantidad de productos en el carrito.
- Vista dinámica del carrito mediante un drawer lateral.
- Navegación entre páginas (Home, Shop, Cart) usando React Router.
- Actualización reactiva de datos y estados de productos.

## Tecnologías y librerías utilizadas
- **React**: Biblioteca principal para la construcción de interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y moderna para proyectos frontend.
- **Material UI (MUI)**: Componentes visuales profesionales y responsivos.
- **Emotion**: Estilizado CSS-in-JS para componentes personalizados.
- **React Router**: Navegación entre páginas de la aplicación.
- **React Query (@tanstack/react-query)**: Gestión eficiente de datos asíncronos y caché.

## Estructura del proyecto
```
src/
  components/        # Componentes reutilizables (Header, Footer, ProductCard, CartDrawer, etc.)
  hooks/             # Custom hooks para lógica de negocio
  layouts/           # Layout principal de la aplicación
  pages/             # Páginas principales (Home, Shop, Cart)
  routes/            # Configuración de rutas
  utils/             # Funciones utilitarias
public/              # Recursos estáticos
```

## Instalación y ejecución
1. Clona el repositorio:
	```bash
	git clone https://github.com/EmersonTejada/shopping-cart.git
	cd shopping-cart
	```
2. Instala las dependencias:
	```bash
	npm install
	```
3. Ejecuta la aplicación en modo desarrollo:
	```bash
	npm run dev
	```

## Autor
Desarrollado por Emerson Tejada.

---

