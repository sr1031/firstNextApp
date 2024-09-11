import { Global } from "@emotion/react";
import { global } from "./globals";
import Head from "next/head";

export default function GlobalFrame({ pageTitle, children }) {
    return (
        <>
            <Global styles={global}></Global>
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            {children}
        </>
    );
}

