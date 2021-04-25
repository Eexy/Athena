import { createClient, Provider } from "urql";
import { App } from "./App";
import { getToken } from "./utils/token";

const client = createClient({
  url: "https://eexy-athena-api.herokuapp.com/graphql",
  requestPolicy: "cache-and-network",
  fetchOptions: () => {
    const token = getToken();
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  },
});

export const Root = () => {
  return (
    <Provider value={client}>
      <App />
    </Provider>
  );
};
