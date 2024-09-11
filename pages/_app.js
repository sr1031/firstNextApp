import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function App({ Component, pageProps }) {
    const apolloClient = new ApolloClient({
	    uri: "http://localhost:3000/graphql",
        cache: new InMemoryCache()
    });

    return (
        <>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    );
}

