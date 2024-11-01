import express from "express";
import "dotenv/config.js";
import Routes from "./src/routes/index.js";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`); // Base URL
});

// import express from "express";
// import "dotenv/config"; // Loads environment variables from .env file
// import Routers from "./src/routers/index.js"; // Ensure this path is correct
// import cors from "cors";

// const PORT = process.env.PORT || 3000;
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use("/api/users", userRouter);
// // app.use("/api", Routers); // /api/users endpoint setup

// app.listen(PORT, () => {
//   console.log(`Server started at PORT: ${PORT}`);
//   console.log(`Visit http://localhost:${PORT}/api`); // Base URL
// });
