const run = () => {
  return Deno.run({
    cmd: ['deno', 'run', '--allow-net', '--allow-read', 'index.js'],
    cwd: 'app',
  })
}
let myPorcess = run()
const watcher = Deno.watchFs('./app')
for await (const event of watcher) {
  console.log(event)
  console.log('kill proceess')
  myPorcess.close()
  console.log('restart')
  myPorcess = run()
}
