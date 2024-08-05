# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## INSTRUCCIONES

- Luego de descargar o clonar el archivo debes instalar el node modules, para eso en la terminal corre la instrucción npm install

- Para correr react abre una terminal de VSC y utiliza la instrucción npm run dev, se abrirá el puerto 5173 en tu navegador

- Instalamos bootstrap por lo que deshabilitamos los archivos .css que están en la carpeta src (también su import en el main.tsx) por lo que se verá según la configuración de bootstrap

- Las etiquetas <></> corresponden a Fragments, una función de React que permite importar partes de un componente sin tener que envolverlo en etiquetas div ni de otro tipo. Fragments nos permite dividir los componentes

- Utilizando el componente CardBody hicimos multiples props, podemos decidir cuales de las propiedades serán opcionales, para eso en la interface junto al nombre de la propiedad ponemos un símbolo de interrogación '?', de esta forma no será obligación ponerlas en el componente de App.tsx siempre. en este caso creamos title y text q es opcional.

- Para usar el componente Card tenemos la prop 'body', para esto usaremos 'children' reemplazando 'body' en el componente Card

- También podemos pasarle OTRO componente y ya no solo propiedades. Usaremos <CardBody/>, y en vez de tipo string usaremos ReactNode, elige la interface de React, te mostrará dos el autocompletado NO elijas la que tiene una llave, luego en App.jsx agrega junto a CardBody las props y sus valores.

* Para Imprimir Listas:

ctrl + alt + R para crear componentes React más rápido con la extensión snipets "tsrfce Creates a React Functional Component with ES7 module system and Typescript interface" esto creara el componente con el nombre del archivo, en este caso List.tsx

- Cada vez que usemos texto html debemos cambiar la palabra 'class' por 'className' al copiarla en los componentes

- Para pasarle info usaremos la prop 'data' de tipo string, y en App.tsx agregamos la prop y le damoss nombre y valor

- usamos 'key' para darle un identifucador único a cada elemento, si viniera de una ddbb tendría un id único.
