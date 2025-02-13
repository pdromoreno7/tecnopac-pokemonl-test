# 🚀 Proyecto Next.js de Pokémones

Este es un proyecto Next.js creado con create-next-app.

## 🌟 Característica Destacada: Generación de Datos con IA

### 🤖 Descripción de Pokémones con el modelo GPT-4o

Tecnológica:

Utilicé el modelo GPT-4o de OpenAI para generar descripciones estructuradas de Pokémones
Generación de datos JSON detallados y precisos
Descripción única para cada Pokémon con información completa

## 🛠 Comenzando

### Instalación de Dependencias

Instala las dependencias usando tu gestor de paquetes preferido:

```bash
npm install    # npm
yarn install   # Yarn
pnpm install   # pnpm
bun install    # Bun
```

### Ejecutar Servidor de Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev    # npm
yarn dev       # Yarn
pnpm dev       # pnpm
bun dev        # Bun
```

🌐 El servidor estará disponible en [http://localhost:3000](http://localhost:3000)

## 📂 Estructura del Proyecto

### Directorios Principales

| Carpeta/Archivo | Descripción                                                     |
| --------------- | --------------------------------------------------------------- |
| `.next/`        | Archivos generados por Next.js durante construcción y ejecución |
| `public/`       | Archivos estáticos públicos                                     |
| `src/`          | Código fuente principal del proyecto                            |
| `cypress/`      | Pruebas end-to-end con Cypress                                  |

### Archivos de Configuración

| Archivo              | Propósito                     |
| -------------------- | ----------------------------- |
| `next.config.ts`     | Configuración de Next.js      |
| `tsconfig.json`      | Configuración de TypeScript   |
| `tailwind.config.ts` | Configuración de Tailwind CSS |
| `eslint.config.mjs`  | Configuración de ESLint       |
| `cypress.config.ts`  | Configuración de Cypress      |
| `jest.config.ts`     | Configuración de Jest         |

## ✨ Características Principales

- 🔥 **Desarrollo Rápido**: Servidor con hot-reloading
- 🧪 **Pruebas Completas**: Configuración de Cypress y Jest
- 🧹 **Calidad de Código**: ESLint para mantener estándares
- 🎨 **Estilos Eficientes**: Tailwind CSS
- ⚡ **Compilación Veloz**: Compilador SWC

## 📚 Documentación Adicional

Para más detalles, consulta la documentación oficial de cada herramienta:

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Cypress](https://docs.cypress.io)
- [Jest](https://jestjs.io/docs/getting-started)

## 🧪 Notas sobre Pruebas

⚠️ Desafíos con Pruebas Unitarias:
Durante el desarrollo, se encontraron problemas con la configuración de Jest y React Testing Library. Las dificultades específicas incluyeron:

Incompatibilidades con dependencias
Errores en el método render
Problemas para realizar mocks de componentes y hooks

🌟 Solución Implementada:

Pruebas end-to-end completamente automatizadas con Cypress
Cobertura de pruebas de integración y flujos de usuario
