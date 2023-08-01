export async function helloWorld(ctx: Context, next: () => Promise<any>) {
  ctx.body = {
    message: "Hello World"
  }

  ctx.status = 200;
  
  await next()
}