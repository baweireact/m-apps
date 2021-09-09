import { Application, Router, helpers } from 'https://deno.land/x/oak/mod.ts'
const app = new Application()
const router = new Router()

router.get('/list', async (ctx) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true })
  ctx.response.body = {
    state: 1,
    data: { id },
    message: '成功',
  }
})

router.post('/login', async (ctx) => {
  const result = ctx.request.body()
  if (result.type === 'json') {
    const { username } = await result.value
    ctx.response.body = {
      state: 1,
      data: { username },
      message: '成功',
    }
  }
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen({ port: 8000 })
console.log(8000)
