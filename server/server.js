const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const authRouter = require("./routes/auth.routes");
const countryRouter = require("./routes/country.routes");

const PORT = config.get('port') || 5000;

const corsMiddleware = require('./middleware/cors.middleware');

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api", countryRouter);

async function start() {
  try {
    await mongoose.connect(config.get('mongoDB'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (error) {
    console.log('Server error', error.message);
    process.exit(1)
  }
}

start();
