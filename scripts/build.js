import { $ } from 'execa'
import fs from 'fs-extra'
import build from 'nw-builder'

await $`vite build`
await fs.copyFile('package.json', 'dist/package.json')

const options = {
  mode: 'build',
  glob: false,
  flavor: 'normal',
  arch: 'x64',
  managedManifest: true,
  srcDir: 'dist',
}

await fs.remove('release')

await build({
  ...options,
  platform: 'win',
  app: {
    icon: 'public/icons/icon.ico',
  },
  outDir: 'release/win-x64',
})
