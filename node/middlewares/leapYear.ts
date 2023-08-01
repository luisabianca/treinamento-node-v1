export async function leapYear(ctx: Context, next: () => Promise<any>) {
  ctx.set('Cache-control', 'no-cache')

  const year = ctx.query.year;

  if (!year) {
    throw new Error('Year is required')
  }

  const response = ((Number(year) % 4 == 0) && ((Number(year) % 100 != 0) || (Number(year) % 400 == 0))) ? `${year} is a leap year` : `${year} is not a leap year`;
  

  ctx.status = 200;
  ctx.body = response;
  
  await next();
}