
## Roomonitor API

La **Roomonitor API** permite gestionar cuartos en un sistema de reservas. Los usuarios pueden registrarse, autenticarse y realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los cuartos.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/wil93h/prueba_tecnica_roomonitor
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Configura las variables de entorno necesarias, como `MONGO_URI`, `JWT_SECRET` y `JWT_EXPIRATION`.

4. Inicia el servidor:

   ```bash
   pnpm run start
   ```

## Endpoints

### 1. Registrar Usuario

- **Método**: `POST`
- **URL**: `/users/register`
- **Descripción**: Crea un nuevo usuario en el sistema.

**Ejemplo de solicitud:**

   ```json
   {
     "name": "nombre_usuario",
     "email": "email@ejemplo.com",
     "password": "tu_contraseña"
   }
   ```

**Respuesta exitosa:**

   ```json
  {
      "name": "nuevo_usuario",
      "email": "email@ejemplo.com",
      "password": "$2b$10$Q1BEGAXf.emfaKnW8yKujOsVAw2/0/m2CnziXMfD2IMs/LxUGDYZm",
      "_id": "6715248a3991c4bd6d391d17",
      "__v": 0
  }
   ```
### 2. Autenticar Usuario

- **Método**: `POST`
- **URL**: `/users/login`
- **Descripción**: Autentica a un usuario y devuelve un token JWT.

**Ejemplo de solicitud:**

   ```json
   {
     "email": "email@ejemplo.com",
     "password": "tu_contraseña"
   }
   ```

**Respuesta exitosa:**

   ```json
   {
     "access_token": "jwt_token"
   }
   ```

### 3. Obtener cuartos

- **Método**: `GET`
- **URL**: `/rooms`
- **Descripción**: Devuelve una lista de todos los cuartos.

**Respuesta exitosa:**

   ```json
   [
    {
        "_id": "67147b2c1dae944c5ff6c689",
        "name": "habitación 1",
        "capacity": 20,
        "description": "habitación 1",
        "available": true,
        "__v": 0
    },
    {
        "_id": "671524a93991c4bd6d391d1a",
        "name": "habitación 2",
        "capacity": 20,
        "description": "habitación 2",
        "available": true,
        "__v": 0
    }
   ]
   ```

### 4. Crear un cuarto

- **Método**: `POST`
- **URL**: `/rooms`
- **Descripción**: Crea un nuevo cuarto en el sistema.

**Ejemplo de solicitud:**

   ```json
   {
    "name": "habitación 1",
    "capacity": 20,
    "description": "habitación 1",
    "available": true
   }
   ```

**Respuesta exitosa:**

   ```json
    {
      "name": "habitación 1",
      "capacity": 20,
      "description": "habitación 1",
      "available": true,
      "_id": "671540737be0748d38b245db",
      "__v": 0
    }
   ```
   
### 5. Actualizar un cuarto

- **Método**: `PUT`
- **URL**: `/rooms/{id}`
- **Descripción**: Actualiza la información de un cuarto.

**Ejemplo de solicitud:**

   ```json
   {
    "name": "habitación 101",
    "capacity": 1,
    "available": false
   }
   ```

**Respuesta exitosa:**

   ```json
    {
      "_id": "671540737be0748d38b245db",
      "name": "habitación 101",
      "capacity": 1,
      "description": "habitación 1",
      "available": false,
      "__v": 0
    }
   ```
   

### 6. Eliminar un cuarto

- **Método**: `DELETE`
- **URL**: `/rooms/{id}`
- **Descripción**: Elimina un cuarto del sistema.

## Autenticación

Todos los endpoints que manejan cuartos requieren un token JWT para ser accesibles. El token debe ser enviado en el encabezado `Authorization` de la siguiente forma:

   ```bash
   Authorization: Bearer <tu_token_jwt>
   ```
