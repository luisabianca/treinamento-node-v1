export async function calculator(ctx: Context, next: () => Promise<any>) {
  ctx.set('Cache-control', 'no-cache')
  const numberOne = ctx.query.numberOne as string
  const numberTwo = ctx.query.numberTwo as string

  if (!numberOne) {
    throw new Error('Number one is required')
  }

  if (!numberTwo) {
    throw new Error('Number two is required')
  }

  const response = {
    numberOne: Number(numberOne),
    numberTwo: Number(numberTwo),
    total: Number(numberOne) + Number(numberTwo),
  }

  ctx.status = 200
  ctx.body = response
  
  await next()
}