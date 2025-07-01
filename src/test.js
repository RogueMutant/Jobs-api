const fs = require("fs");
const swaggerSpec = require("./swagger");

fs.writeFileSync("./swagger-output.json", JSON.stringify(swaggerSpec, null, 2));
console.log("✅ Swagger JSON generated");
