const { app } = require('@azure/functions');

app.http('mySecondFunction', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log('mySecondFunction triggered');
    return { body: "This is the second function!" };
  }
});
