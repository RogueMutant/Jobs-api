require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const rateLimiter = require("express-rate-limit");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const authRoute = require("./routes/auth");
const jobsRoute = require("./routes/jobs");
const authenticationMiddleware = require("./middleware/authentication");
const cookieParser = require("cookie-parser");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send('<h1>Job API</h1><a href="/api/v1/auth">Login/Register</a>');
});
// routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", authenticationMiddleware, jobsRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
