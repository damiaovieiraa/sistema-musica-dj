const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Sistema de Música para DJ",
        version: "1.0.0",
        description: "Documentação da API com exemplos de requisições e respostas"
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [
        {
            bearerAuth: [],
        }
    ],
    servers: [
        {
            url: "https://sistema-musica-dj-3n18.onrender.com"
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;