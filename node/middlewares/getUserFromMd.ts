export async function getUserFromMd(ctx: Context, next: () => Promise<void>) {
  ctx.set('Cache-Control', 'no-cache');
  const { email } = ctx.query;

  const response = await ctx.clients.masterdata.searchDocuments({
    dataEntity: 'CL',
    fields: ['documents', 'email', 'firstName'],
    pagination: {
      page: 1,
      pageSize: 1
    },
    where: `email=${email}` 
  })

  ctx.body = {
    response
  };

  ctx.status = 200;
 next();
}