# Preparación de carpetas y archivos

- `md src`
- `md dist`
- `md fonts`
- `ni .gitignore`
- `ni .prettierc`
- `ni tailwind.config.js`
- `cd src`
- `ni input.css`

# Git

En .gitignore:

`node_modules`

# Instalación Tailwind

- `npm install tailwindcss@latest`

- Copiar fuente `CormorantGaramond-Regular.ttf` en `fonts`


En tailwind.config.js:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        marca: ['CormorantGaramond', 'sans']
      }
    },
  }
}
```

En input.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;


@layer components {
    .btn {
        @apply select-none
    }

}

@font-face {
    font-family: 'CormorantGaramond';
    src: url('/fonts/CormorantGaramond-Regular.ttf') format('woff2');
}
```

Usar la clase `font-marca` para poder usar esta fuente.

# Instalación Prettier para ordenar clases

- `npm install -D prettier prettier-plugin-tailwindcss`

En .prettierc:

```json
{
    "plugins": ["prettier-plugin-tailwindcss"],
    "tabWidth": 4,
    "printWidth": 200
}
```

Se puede instalar la extensión Prettier y para que cada vez que se guarde el archivo se formatee el html. Para eso, editar `settings.json`:

```json
"[html]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

# Script para Tailwind

- `npx tailwind -i ./src/input.css -o ./src/style.css build --watch`

# Script para Prettier

- `npx prettier --write src/*.html`
