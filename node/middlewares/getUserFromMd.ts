export async function getUserFromMd(ctx: Context, next: () => Promise<void>) {

  const { email } = ctx.query;

  console.log(email, "email");

  ctx.body = {
    email
  };

  ctx.status = 200;
  await next();
}