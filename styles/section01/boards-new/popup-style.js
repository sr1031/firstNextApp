import styled from "@emotion/styled";
import { cssFlexBox, cssTextInput, fadeCss } from "./insertCss";

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    background-color: #9191918f;
    position: fixed;
    top: 0;
    left: 0;
    ${cssFlexBox}
    justify-content: center;
    align-items: center;
    ${fadeCss}
`;

export const Popup = styled.div`
    width: 600px;
    height: 540px;
    background-color: white;
    ${cssFlexBox}
    font-size: 24px;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    border-radius: 20px;
    position: relative;
`;

export const AddressInput = styled.input`
    ${cssTextInput}
    width: 450px;
    height: 50px;
    margin-bottom: 30px;
`;

export const BtnWrapper = styled.div`
    ${cssFlexBox}
    width: 240px;
    justify-content: space-between;
`;

export const CloseBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    font-size: 20px;
    background-color: white;
    position: absolute;
    top: 26px;
    left: 530px;
    cursor: pointer;
`;

export const Btn = styled.button`
    width: 90px;
    height: 50px;
    border: none;
    background-color: #ffd600;
    color: black;
    border-radius: 10px;
    font-size: 22px;
    cursor: pointer;
`;

