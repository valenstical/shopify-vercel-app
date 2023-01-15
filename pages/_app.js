import { Provider } from "@shopify/app-bridge-react";
import { AppProvider } from "@shopify/polaris";
import ApolloClient from "apollo-boost";
import App from "next/app";
import fetch from "isomorphic-fetch";
import { ApolloProvider } from "react-apollo";
import ClientRouter from "../components/ClientRouter";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_HOST}/api/shopify/admin/2020-10/graphql`,
  fetch: fetch,
  fetchOptions: {
    credentials: "include",
  },
});
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    console.log("df");

    return (
      <AppProvider i18n={{}}>
        <Provider
          config={{
            apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
            shopOrigin: process.env.NEXT_PUBLIC_HOST,
            forceRedirect: true,
          }}
        >
          <ClientRouter />
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Provider>
      </AppProvider>
    );
  }
}

export default MyApp;
