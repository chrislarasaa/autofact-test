# Autofact TEST v1
## Laravel + React + JWT

Se creo 2 proyectos, el backend fue creado con Laravel, el cual contiene la API, para el manejo de las respuestas del Quiz y el login de usuario. Como metodo de seguridad se agrego Json Web Token.

Por otro lado, el frontend fue creado con React, el cual contiene 1 componente para el login y uno para el quiz, y maneja las llamadas a la API con AXIOS.

## INSTALACION BACKEND
Debe tener creada una base de datos en mysql llamada `autofact`
Laravel v 8.0
```sh
composer install
cp .env.example .env
php artisan migrate 
php artisan db:seed
php artisan serve
```
## INSTALACION FRONTEND
```sh
npm install
npm start
```

## USO DE LA APP
### Login
```sh
127.0.0.1:3000/login
```
### Credenciales
```sh
user: admin@gmail.com
pass: asd12345
```
### Quiz
```sh
127.0.0.1:3000
```