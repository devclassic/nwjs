import fs from 'fs-extra'
import { $ } from 'execa'
import build from 'nw-builder'

const vite = async () => {
  await $`vite`
}

const nw = async () => {
  const url = 'http://localhost:5173/'

  const pkg = await fs.readJSON('package.json')
  pkg['main'] = url
  pkg['node-remote'] = url

  await fs.writeJSON('dev/package.json', pkg)

  await build({
    mode: 'run',
    glob: false,
    flavor: 'sdk',
    srcDir: 'dev',
  })
}

await Promise.all([vite(), nw()])
