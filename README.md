# FullMoto Store — Backend API

FullMoto es una plataforma e-commerce dedicada a la venta de accesorios para motocicletas y equipamiento para motociclistas. Este repositorio contiene la **API REST** construida con Node.js y Express.

## Tech Stack

| Tecnología   | Versión | Propósito                              |
| ------------ | ------- | -------------------------------------- |
| Node.js      | 22+     | Runtime (con `--env-file` y `--watch`) |
| Express      | 5.x     | Framework HTTP                         |
| Mongoose     | 9.x     | ODM para MongoDB                       |
| bcrypt       | 6.x     | Hash de contraseñas                    |
| jsonwebtoken | 9.x     | Autenticación JWT                      |
| cors         | 2.x     | Manejo de CORS                         |

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/cafigueroaz/FullMoto-Stor---backend.git
cd FullMoto-Stor---backend

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores:
#   PORT=3000
#   DB_URI=mongodb+srv://...
#   JWT_SEED=tu_clave_secreta

# 4. Ejecutar en desarrollo
npm run dev
```

## Seeds (Datos Semilla)

Ejecutar en orden para poblar la base de datos con datos de demostración:

```bash
# Primero: 7 categorías
node --env-file .env ./src/seeds/categories.seed.js

# Segundo: 35 productos (5 por categoría)
node --env-file .env ./src/seeds/products.seed.js
```

### Categorías disponibles

| Categoría            | Slug                           |
| -------------------- | ------------------------------ |
| Cascos               | `cascos-proteccion`            |
| Chaquetas            | `chaquetas-moteras`            |
| Guantes              | `guantes-con-proteccion`       |
| Iluminación LED      | `iluminacion-led-motos`        |
| Lujos y Accesorios   | `lujos-y-accesorios`           |
| Maleteros y Alforjas | `equipaje-y-maleteros`         |
| Intercomunicadores   | `intercomunicadores-bluetooth` |

## Estructura del Proyecto

```
src/
├── config/
│   ├── global.config.js        # Configuración global
│   └── mongo.config.js         # Conexión a MongoDB
├── controllers/
│   ├── auth.controller.js      # Login y renovación de token
│   ├── cart.controller.js      # Carrito de compras
│   ├── categories.controllers.js
│   ├── order.controller.js     # Órdenes de compra
│   ├── products.controllers.js
│   ├── reviews.controller.js   # Reseñas de productos
│   └── users.controllers.js
├── helpers/
│   ├── bcrypt.helpers.js       # Hash y comparación de passwords
│   └── jwt.helpers.js          # Generación de tokens JWT
├── middlewares/
│   ├── authentication.middlewares.js  # Verificación de JWT
│   ├── authorization.middlewares.js   # Verificación de roles
│   └── without-role.middlewares.js    # Registro sin rol
├── models/
│   ├── User.model.js
│   ├── cart.model.js
│   ├── categories.model.js
│   ├── orders.model.js
│   ├── product.model.js
│   └── reviews.model.js
├── routes/
│   ├── auth.route.js
│   ├── cart.route.js
│   ├── categories.route.js
│   ├── orders.route.js
│   ├── products.route.js
│   ├── reviews.route.js
│   └── users.route.js
├── seeds/
│   ├── categories.seed.js      # Seed de 7 categorías
│   └── products.seed.js        # Seed de 35 productos
├── services/
│   └── ...                     # Lógica de negocio por entidad
└── index.js                    # Entry point
```

## Endpoints de la API

Base URL: `http://localhost:3000/api/v1`

### Auth (`/auth`)

| Método | Ruta                | Descripción       | Auth |
| ------ | ------------------- | ----------------- | ---- |
| `POST` | `/auth/register`    | Registrar usuario | ❌   |
| `POST` | `/auth/login`       | Iniciar sesión    | ❌   |
| `GET`  | `/auth/renew-token` | Renovar token JWT | ✅   |

### Users (`/users`)

| Método   | Ruta             | Descripción            | Roles                    |
| -------- | ---------------- | ---------------------- | ------------------------ |
| `POST`   | `/users`         | Crear usuario          | `admin`, `staff`         |
| `GET`    | `/users`         | Listar usuarios        | `admin`                  |
| `GET`    | `/users/:idUser` | Obtener usuario por ID | `admin`, `user`, `staff` |
| `PATCH`  | `/users/:idUser` | Actualizar usuario     | `admin`, `user`, `staff` |
| `DELETE` | `/users/:idUser` | Eliminar usuario       | `admin`                  |

### Products (`/products`)

| Método   | Ruta                               | Descripción                 | Roles            |
| -------- | ---------------------------------- | --------------------------- | ---------------- |
| `GET`    | `/products`                        | Listar productos            | Público          |
| `GET`    | `/products/:idProduct`             | Obtener producto por ID     | Público          |
| `GET`    | `/products/categorias/:categoryId` | Filtrar por categoría       | Público          |
| `GET`    | `/products/marcas`                 | Filtrar por marca           | Público          |
| `GET`    | `/products/modelo`                 | Filtrar por compatibilidad  | Público          |
| `GET`    | `/products/price-range`            | Filtrar por rango de precio | Público          |
| `POST`   | `/products`                        | Crear producto              | `admin`, `staff` |
| `PATCH`  | `/products/:idProduct`             | Actualizar producto         | `admin`, `staff` |
| `DELETE` | `/products/:idProduct`             | Eliminar producto           | `admin`, `staff` |

### Categorías (`/categorias`)

| Método   | Ruta                             | Descripción              | Auth             |
| -------- | -------------------------------- | ------------------------ | ---------------- |
| `GET`    | `/categorias`                    | Listar categorías        | Público          |
| `GET`    | `/categorias/:idcategory`        | Obtener categoría por ID | Público          |
| `POST`   | `/categorias/created`            | Crear categoría          | `admin`, `staff` |
| `PATCH`  | `/categorias/:idcategory`        | Actualizar categoría     | `admin`, `staff` |
| `DELETE` | `/categorias/delete/:idcategory` | Eliminar categoría       | `admin`, `staff` |

### Cart (`/cart`)

| Método   | Ruta               | Descripción                 | Auth |
| -------- | ------------------ | --------------------------- | ---- |
| `GET`    | `/cart`            | Obtener carrito del usuario | ✅   |
| `POST`   | `/cart`            | Agregar item al carrito     | ✅   |
| `PATCH`  | `/cart`            | Actualizar cantidad de item | ✅   |
| `DELETE` | `/cart/:productId` | Eliminar item del carrito   | ✅   |
| `DELETE` | `/cart/clear`      | Vaciar carrito              | ✅   |

### Orders (`/orders`)

| Método  | Ruta                | Descripción          | Auth |
| ------- | ------------------- | -------------------- | ---- |
| `GET`   | `/orders`           | Obtener orden actual | ✅   |
| `GET`   | `/orders/my-orders` | Historial de órdenes | ✅   |
| `POST`  | `/orders`           | Crear orden          | ✅   |
| `PATCH` | `/orders`           | Actualizar cantidad  | ✅   |
| `PATCH` | `/orders/confirm`   | Confirmar orden      | ✅   |

### Reviews (`/reviews`)

| Método   | Ruta       | Descripción                  | Auth    |
| -------- | ---------- | ---------------------------- | ------- |
| `POST`   | `/reviews` | Crear reseña                 | Público |
| `GET`    | `/reviews` | Obtener reseñas por producto | Público |
| `DELETE` | `/reviews` | Eliminar reseña              | Público |

### Health Check

| Método | Ruta      | Descripción         |
| ------ | --------- | ------------------- |
| `GET`  | `/health` | Estado del servidor |

## Roles del Sistema

| Rol     | Descripción                               |
| ------- | ----------------------------------------- |
| `admin` | Acceso total a todos los recursos         |
| `staff` | Gestión de productos                      |
| `user`  | Compras, carrito, órdenes y perfil propio |
