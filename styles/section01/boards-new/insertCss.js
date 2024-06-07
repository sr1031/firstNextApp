import { css, keyframes } from "@emotion/react";

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

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }

    100%{
        opacity: 0;
    }
`;

export const fadeCss = (props) => css`
    visibility: ${props.show? "visible" : "hidden"};
    animation: ${props.show? fadeIn : fadeOut} 0.7s ease-in-out;
    transition: visibility 0.7s ease-in-out;
`;

