import { Global } from "@emotion/react";
import Head from "next/head";
import { global } from "../../styles/boards/globals";
import {
    Base,
    Container,
    Wrapper
} from "../../styles/boards/boards-new/01-boards-style";

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

