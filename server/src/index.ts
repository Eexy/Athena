import "reflect-metadata";
import express from "express";
import "dotenv/config";

const main = async () => {
  const PORT = process.env.PORT || 4000;
  const app: express.Express = express();

  app.listen(PORT, () => console.log(`listening port http://localhost:${PORT}`));
}

main();