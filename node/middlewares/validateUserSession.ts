export async function validateUserSession(ctx: Context, next: () => Promise<any>) {
  ctx.set('Cache-control', 'no-cache')
  // ctx.clients.session.getSession('115611', ['*'])

  const sessionToken = ctx.cookies.get('vtex_session')

  ctx.body = {
    sessionToken
  }

  next()
}