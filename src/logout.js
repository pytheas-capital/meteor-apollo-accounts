import { getLoginToken, resetStore } from "./store";
import gql from "graphql-tag";

export default async function (apollo, history) {
  const token = await getLoginToken();

  if (!token) {
    history.push("/login");
    return;
  }

  await apollo.mutate({
    // wait for apollo mutate
    mutation: gql`
      mutation logout($token: String!) {
        logout(token: $token) {
          success
        }
      }
    `,
    variables: {
      token,
    },
  });
  await resetStore(); // move this line after apollo.mutate
  await apollo.resetStore();
}
