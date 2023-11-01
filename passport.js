// Import the Immutable Passport client
import { Passport } from "@immutable/passport";

// Initialize the Passport client with your application's client ID and secret
const passport = new Passport({
  clientId: "iPbipcZxUnD0S7IBg4qsTBGEveNAS8IO",
  clientSecret: "YOUR_CLIENT_SECRET",
});

// Log in a user with Passport
passport.login().then((user) => {
  // Display the user's id token, access token, and nickname
  console.log(user.idToken);
  console.log(user.accessToken);
  console.log(user.nickname);

  // Initiate a transaction from Passport
  passport
    .sendTransaction({
      to: "0x1234567890123456789012345678901234567890",
      value: "1000000000000000000",
      data: "0x12345678",
    })
    .then((transactionHash) => {
      // Display the transaction hash
      console.log(transactionHash);
    });
});

// Log out a user
passport.logout();