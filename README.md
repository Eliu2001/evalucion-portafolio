# API de Usuarios y Órdenes

API RESTful simple para gestión de usuarios y órdenes utilizando Node.js, Express y PostgreSQL con Sequelize.

## Requisitos Previos

- Node.js (v14 o superior)
- PostgreSQL
- npm

## Configuración

1. Clona el repositorio:
```bash
git clone https://github.com/Eliu2001/evalucion-portafolio.git
cd evalucion-portafolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
DB_NAME=nombre_base_datos
DB_USER=usuario_postgres
DB_PASS=contraseña_postgres
DB_HOST=localhost
```

4. Inicia el servidor:
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

## Endpoints Disponibles

### Usuarios

- `GET /users` - Obtener todos los usuarios
- `GET /users/:id` - Obtener un usuario por ID
- `POST /users` - Crear un nuevo usuario
  ```json
  {
    "name": "Nombre Usuario",
    "email": "usuario@ejemplo.com",
    "password": "contraseña123"
  }
  ```
- `PUT /users/:id` - Actualizar un usuario
- `DELETE /users/:id` - Eliminar un usuario

### Órdenes

- `GET /users/:userId/orders` - Obtener todas las órdenes de un usuario
- `POST /users/:userId/orders` - Crear una nueva orden para un usuario
  ```json
  {
    "product": "Nombre Producto",
    "quantity": 1
  }
  ```

## Tecnologías Utilizadas

- Express.js - Framework web
- Sequelize - ORM para PostgreSQL
- dotenv - Manejo de variables de entorno
- PostgreSQL - Base de datos

## Scripts Disponibles

- `npm run dev` - Inicia el servidor en modo desarrollo con nodemon