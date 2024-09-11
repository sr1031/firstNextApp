import { css } from "@emotion/react";

export const global = css`
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        font-family: Noto Sans CJK KR;
    }

    html, body {
        width: 100vw;
        height: 100vh;
    }
`;


export const cssFlexBox = (props) =>
    css`
        display: flex;
        flex-direction: ${props.column ? "column" : "row"};
    `;