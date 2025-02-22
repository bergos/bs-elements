#!/usr/bin/env node

import { readFile } from 'node:fs/promises'

async function main (input) {
  const content = await readFile(input)

  const script = [
    '/* eslint-disable no-irregular-whitespace */',
    `const css = \`${content}\``,
    '',
    'export default css'
  ].join('\n')

  console.log(script)
}

main(process.argv[2])
