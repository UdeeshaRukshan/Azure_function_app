const { app } = require('@azure/functions');

app.http('myFirstFunction', {
  methods: ['GET', 'POST'],
  handler: async (request, context) => {
    context.log('Http function was triggered');
    return { body: 'Hello, Function how are you!!!!' };
  }
});
