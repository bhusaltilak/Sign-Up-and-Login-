const swaggerData = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      version: '1.0.0',
      title: 'User API',
      description: 'User management system',
      servers: ['http://localhost:5000'],
    },
    components: {
      securitySchemes: {
        jwt: {
          type: 'http' || 'https',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['Routes/*.js'],
};

module.exports= swaggerData;
