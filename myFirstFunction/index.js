const { app } = require('@azure/functions');

app.http('myFirstFunction', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous', // no authentication for testing
  handler: async (request, context) => {
    context.log('myFirstFunction triggered');
    
    // Handle GET query parameter
    const name = request.query.name || "Guest";

    // Handle POST JSON body
    let data = {};
    if (request.method === "POST") {
      data = await request.json();
    }

    return {
      body: {
        message: `Hello ${data.name || name}! Your function is working.`,
        received: data
      }
    };
  }
});
