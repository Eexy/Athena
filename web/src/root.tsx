import { createClient, Provider } from "urql";
import { App } from "./App";

const client = createClient({
  url: "http://localhost:4000/graphql",
});

export const Root = () => {
  return (
    <Provider value={client}>
      <App />
    </Provider>
  );
};
