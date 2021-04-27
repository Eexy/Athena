import {createClient} from "urql";

const client = createClient({
  url: "https://eexy-athena-api.herokuapp.com/graphql"
});

export default client;