import { AppProps } from "next/app"; // Import AppProps from Next.js
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import { PizzaProvider } from "@/context/PizzaContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <PizzaProvider>
        <Component {...pageProps} />
      </PizzaProvider>
    </ApolloProvider>
  );
}
