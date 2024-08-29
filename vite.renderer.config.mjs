import { defineConfig } from 'vite';
import { pluginExposeRenderer } from './vite.base.config.mjs';
import react from '@vitejs/plugin-react'
import * as path from "node:path";

// https://vitejs.dev/config
export default defineConfig((env) => {
  /** @type {import('vite').ConfigEnv<'renderer'>} */
  const forgeEnv = env;
  const { root, mode, forgeConfigSelf, forgeConfig } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  /** @type {import('vite').UserConfig} */
  console.log('####################')
  console.log(forgeEnv)
  console.log('forgeConfig.build:', forgeConfig.build)
  console.log('forgeConfig.renderer:', forgeConfig.renderer)
  console.log('####################')
  return {
    root: path.join(root, 'src/renderer'),
    mode,
    base: '/',
    build: {
      outDir: `.vite/build/renderer/${name}`,
    },
    plugins: [
        pluginExposeRenderer(name),
        react(),
    ],
    resolve: {
      preserveSymlinks: true,
    },
    clearScreen: false,
  };
});
