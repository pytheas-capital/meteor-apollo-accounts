import hashPassword from "./hashPassword";
import gql from "graphql-tag";
import { storeLoginToken } from "./store";

export default async function(
  { username, email, password, twoFactorToken },
  apollo
) {
  const result = await apollo.mutate({
    mutation: gql`
      mutation login(
        $username: String
        $email: String
        $password: HashedPassword!
        $twoFactorToken: String
      ) {
        loginWithPassword(
          username: $username
          email: $email
          password: $password
          twoFactorToken: $twoFactorToken
        ) {
          id
          token
          tokenExpires
        }
      }
    `,
    variables: {
      username,
      email,
      password: hashPassword(password),
      twoFactorToken
    }
  });

  const { id, token, tokenExpires } = result.data.loginWithPassword;
  await storeLoginToken(id, token, new Date(tokenExpires));
  return id;
}
