# Aplicación de Calendario hecho en React, TypeScript y conectado al backend con MongoDB

Esta es una aplicación realizada gracias al curso de React de Fernando Herrera.

En él se trabajo con Vite para la creacion del proyecto

## Librerías que se usaron:

  * Material-UI
  * Axios
  * Sweetalert2
  * Primereact
  * Redux-Toolkit
  * Date-fns
  * gh-pages

## Para levantar la aplicación

Debe clonar el repositorio y ejecutar los siguientes codigos

### `yarn`
instalara todas las dependencias necesarias y configuradas en el proyecto.

### `yarn dev`
Ejecuta el proyecto en modo de desarrollo de forma local


### `yarn deploy`
Ejecuta el deploy en github pages

---


>  ***Configuración de archivo variables.ts*** 
  >
    > > Se agrego un archivo variables.ts en el cual se debe agregar la ruta del deploy para que la misma pueda ser tomada en la configuracion de vite.config.ts con el nombre de ***urlDeploy***

> Debe crear el archivo .env como el template asignando la ruta o endpoint que tenga configurado en su backend, la ruta del repositorio para subirlo a github pages.

> En el archivo package.json esta tomando la variable ***VITE_API_URL_DEPLOY*** declarada en el .env para el momento de hacer el deploy en github pages.

