import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

import pkg from './package.json'

const deps = pkg.dependencies

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: "remoteEntry.js",
      remotes: {
        store: "http://localhost:4500/assets/remoteEntry.js",
      },
      exposes: {
        "./Header": "./src/Header"
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      }
    })
  ],
  build: {
    target: "esnext"
  },
  preview: {
    port: 4501
  }
})
