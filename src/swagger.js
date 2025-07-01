const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Tracker API",
      version: "1.0.0",
      description: "A simple Express Job Tracking API with authentication",
    },
    servers: [
      {
        url: "https://jobs-api-3mrj.onrender.com",
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/**/*.js", "./docs/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
