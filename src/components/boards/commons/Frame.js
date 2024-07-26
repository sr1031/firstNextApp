import { Global } from "@emotion/react";
import Head from "next/head";
import { global } from "./globals";
import {
    Base,
    Container,
    Wrapper
} from "../units/news/BoardNew.style";

export default function Frame({pageTitle, children}) {
    return (
        <>
            <Global styles={global}> </Global>
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Base>
                <Container>
                    <Wrapper column>
                        {children}
                    </Wrapper>
                </Container>
            </Base>
        </>
    );
}

