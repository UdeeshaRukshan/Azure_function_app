const { app } = require('@azure/functions');

app.http('myFirstFunction', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log('myFirstFunction triggered');
    const name = request.query.name || 'Guest';
    let data = {};
    if (request.method === 'POST') {
      data = await request.json();
    }
    return { body: `Hello ${data.name || name}!` };
  }
});
