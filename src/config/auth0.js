import Auth0 from "react-native-auth0";

const AUTH0_DOMAIN = "publicart.auth0.com";
const CLIENT_ID = "XVBk4KHC9GVhSST1TnMi9wNEP-WgydtI";

const auth0 = new Auth0({
  domain: `${AUTH0_DOMAIN}`,
  clientId: `${CLIENT_ID}`,
});

export { auth0, AUTH0_DOMAIN, CLIENT_ID };
