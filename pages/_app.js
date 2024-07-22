import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function App({ Component, pageProps }) {
    const apolloClient = new ApolloClient({
        uri: "http://backend-example.codebootcamp.co.kr/graphql",
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

