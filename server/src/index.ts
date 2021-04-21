import "dotenv/config";
import "reflect-metadata";
import "./utils/db";
import express from "express";
import cors from "cors";
import { buildSchema } from "type-graphql";
import { TodoResolver } from "./resolvers/todo-resolver";
import { ApolloServer } from "apollo-server-express";
import { UserResolver } from "./resolvers/user-resolver";

const main = async () => {
  const PORT = parseInt(process.env.PORT!) || 4000;
  const app: express.Express = express();

  app.use(cors());

  const schema = await buildSchema({
    resolvers: [TodoResolver, UserResolver],
  });

  const apolloServer: ApolloServer = new ApolloServer({ schema });
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () =>
    console.log(`listening port http://localhost:${PORT}`)
  );
};

main();
