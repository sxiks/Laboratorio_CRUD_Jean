# LAB CRUD - Backend

Backend pedagogico con Express, MySQL, ByCrypt, JWT, roles `admin` / `cliente`.

## 1. Base de datos

Ejecuta `../sql/lab_crud.sql` en MySQL.

## 2. Variables de entorno

Copia:

`.env.example` -> `.env`

y completa las credenciales de MySQL y `JWT_SECRET`.

## 3. Instalar

```bash
npm install
```
API: `http://localhost:3000`

## Rutas

Publicas:
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/health`

Protegitas:
- GET `/api/equipos`
- GET `/api/equipos/:id`
- POST `/api/equipos`
- PUT `/api/equipos/:id`
- DELETE `/api/equipos/:id` -- solo `admin`

## Flujo pedagogico

Registro -> bycrypt.hash -> MySQL -> Login bycrypt.compare -> JWT -> middleware -> autorizacion por rol -> CRUD.