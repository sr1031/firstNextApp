import { css } from "@emotion/react";

export const cssFlexBox = (props) =>
    css`
        display: flex;
        flex-direction: ${props.column ? "column" : "row"};
    `;

export const cssTextInput = css`
    width: 100%;
    height: 100%;
    border: 1px solid #bdbdbd;
    text-indent: 30px;
    font-size: 16px;
    &::placeholder {
        color: #bdbdbd;
        font-size: 16px;
    }
`;