# Film API

Este proyecto es una **API RESTful** para gestionar películas utilizando **Node.js**, **Express**, **MongoDB** y **JWT** para la autenticación. El objetivo es implementar correctamente las operaciones CRUD para manejar los datos de las películas, proteger las rutas con autenticación mediante JWT, y gestionar los errores y validaciones adecuadamente.

## Funcionalidades

### Operaciones CRUD para Películas:
- **Crear una película**
- **Leer películas** (por título o listar todas)
- **Actualizar detalles de una película**
- **Eliminar una película**

### Autenticación de Usuarios con JWT:
- **Registro de usuarios** con autenticación segura de contraseñas.
- **Inicio de sesión de usuarios** y generación de un **token JWT** para la autenticación de futuras solicitudes.

### Protección de Rutas con Middleware de Autenticación:
- Rutas protegidas para la creación, actualización y eliminación de películas.

### Uso de Variables de Entorno:
- Configuración de variables sensibles como la **clave secreta de JWT**, la **URI de la base de datos** y el **puerto del servidor**.

### Validación y Manejo de Errores:
- Validación de entradas de usuario (nombre de usuario, correo electrónico, campos de película).
- Manejo de errores como duplicados, campos faltantes y errores del servidor.

### Seguridad de la API:
- Uso de **bcrypt** para el almacenamiento seguro de contraseñas.
- Protección de rutas sensibles mediante **JWT**.

## Estructura de la API

### Modelo de Película (Film)

Cada película tiene los siguientes atributos:

- **title**: Título de la película (único).
- **genre**: Género de la película.
- **duration**: Duración de la película en minutos.
- **language**: Idioma de la película.
- **country**: País de origen de la película.
- **releaseDate**: Fecha de lanzamiento de la película.

## Endpoints

### 1. Registro de Usuario
**POST** `/auth/register`

Crea un nuevo usuario con un nombre de usuario, correo electrónico y contraseña.

**Campos requeridos**: `username`, `password`, `email`

**Respuestas**:
- `201`: Usuario creado correctamente.
- `400`: Si el usuario ya existe o faltan campos.

---

### 2. Inicio de Sesión
**POST** `/auth/login`

Inicia sesión y devuelve un token JWT.

**Campos requeridos**: `username`, `password`

**Respuestas**:
- `200`: Autenticación exitosa con el token.
- `400`: Credenciales inválidas.

---

### 3. Obtener Todas las Películas
**GET** `/films`

Devuelve todas las películas almacenadas en la base de datos.

**Respuestas**:
- `200`: Lista de todas las películas.

---

### 4. Obtener una Película por Título
**GET** `/films/:id`

Devuelve los detalles de una película por su título.

**Respuestas**:
- `200`: Detalles de la película.
- `404`: Película no encontrada.

---

### 5. Crear una Nueva Película
**POST** `/films`

Crea una nueva película en la base de datos.

**Requiere Autenticación** (token JWT).

**Campos requeridos**: `title`, `genre`, `duration`, `language`, `country`, `releaseDate`

**Respuestas**:
- `201`: Película creada correctamente.
- `400`: Si faltan campos o hay un título duplicado.

---

### 6. Actualizar una Película
**PUT** `/films/:id`

Actualiza la información de una película existente por su título.

**Requiere Autenticación** (token JWT).

**Campos opcionales**: `genre`, `duration`, `language`, `country`, `releaseDate`

**Respuestas**:
- `200`: Película actualizada correctamente.
- `404`: Película no encontrada.
- `400`: Datos inválidos.

---

### 7. Eliminar una Película
**DELETE** `/films/:id`

Elimina una película por su título.

**Requiere Autenticación** (token JWT).

**Respuestas**:
- `200`: Película eliminada correctamente.
- `404`: Película no encontrada.

---

## Ejemplo de Datos (JSON)

**Película 1:**
```json
{
  "title": "The Dark Knight",
  "genre": "Action, Crime, Drama",
  "duration": 152,
  "language": "English",
  "country": "USA",
  "releaseDate": "2008-07-18T00:00:00.000Z"
}