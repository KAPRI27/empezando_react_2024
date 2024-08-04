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

- Las etiquetas <></> corresponden a Fragments, una función de React que permite importar partes de un componente sin tener que envolverlo en etiquetas div ni de otro tipo
