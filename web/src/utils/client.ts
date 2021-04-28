import {createClient} from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  requestPolicy: "network-only",
  fetchOptions: () => ({
    credentials: "include"
  })
});

export default client;