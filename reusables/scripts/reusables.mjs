#!/usr/bin/env node
'use strict'
import { spawn } from "cross-spawn"

function main() {
  const stdio = [
    'inherit', // stdin
    'inherit', // stdout
    'inherit', // stderr
  ]
  spawn('pnpx', ['@react-native-reusables/cli@latest', ...process.argv.slice(2)], { stdio })
}

main()