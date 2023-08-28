# Valorant API REST 🕹️👨‍💻

## Introducción:

Bievenido al backend de Valorant App

## Tabla de contenidos:

- [Autor](#autor👀)
- [Tecnologias](#tecnologias-👨‍💻)
- [Entornos Compatibles](#entornos-compatibles-💻)
- [Instalación](#instalación🤖)
- [Modulos](#modulos-🚨)

## Autor👀

- [Pablo Sandoval](https://github.com/SPablo2191)

## Tecnologias 👨‍💻

![Node JS](https://img.shields.io/badge/node-18.14.2-brightgreen.svg)
![Express](https://img.shields.io/badge/Express-4.18.2-green.svg)
![Typescript](https://img.shields.io/badge/Typescriptk-5.1.6-success.svg)
![DrizzleORM](https://img.shields.io/badge/drizzleORM-0.28.3-blue.svg)
![Dot env](https://img.shields.io/badge/dotenv-16.3.1-orange.svg)

## Entornos Compatibles
![Linux](https://img.shields.io/badge/Linux-compatible-green)
![Windows](https://img.shields.io/badge/Windows-compatible-green)

## Instalación🤖

Para hacer uso del proyecto de manera local es necesario realizar los siguientes pasos:

1. Ingresar los siguiente comandos en consola:

```bash
npm i
```

este comando instalara todas las dependencias necesarias para el correcto funcionamiento del proyecto.
2. crear .env con las variables de entorno para acceder a las base de datos:
```json
PORT=
MYSQL_ADDON_HOST=
MYSQL_ADDON_DB=
MYSQL_ADDON_USER=
MYSQL_ADDON_PORT=
MYSQL_ADDON_PASSWORD=
MYSQL_ADDON_URI=
SECRET_JWT_SEED=
``` 

3. generar migraciones con drizzle
para ello se debe realizar el siguiente comando
```bash
npm exec drizzle-kit generate:mysql 
```
4. listo!
emplear el siguiente comando para levantar el servidor:
```bash
npm run dev
```

## Modulos 🚨
- [users](#Users)
- [auth](#Auth)
- [agents](#Agents)


## Users
| Método | Path | Descripción |
| ------ | -------- | ----------- |
| GET    | /api/users/ | Recupera a todos los usuarios registrados |
| GET   | /api/users/:userId | Recupera los agentes registrados como favoritos por el usuario y sus datos |


## Auth
| Método | Path | Descripción |
| ------ | -------- | ----------- |
| POST    | /api/auth/register | Registrar un nuevo usuario |
| POST    | /api/auth/login | Iniciar Sesión con un nuevo usuario |

## Agents
| Método | Path | Descripción |
| ------ | -------- | ----------- |
| POST    | /api/user/agents | Registrar un nuevo agente favorito |

