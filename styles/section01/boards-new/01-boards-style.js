import styled from "@emotion/styled";
import { cssFlexBox, cssTextInput } from "./insertCss";

export const Base = styled.div`
    width: 100vi;
    ${cssFlexBox}
    justify-content: center;
`;

export const Container = styled.div({
    width: "1200px",
    marginTop: "30px",
    boxShadow: "0px 4px 20px 0px #00000033",

});

export const Wrapper = styled("div")`
    ${cssFlexBox};
    padding: 80px 102px;
`;
export const Header = styled.div`
    width: 100%;
    font-size: 36px;
    font-weight: 700;
    ${cssFlexBox}
    justify-content: center;
    margin-bottom: 80px;
`;

export const WrapperInfo = styled.div`
    ${cssFlexBox}
    width: 100%;
    margin-bottom: 40px;
    justify-content: space-between;
`;

export const WrapperUser = styled.div`
    ${cssFlexBox}
    width: 482px;
    height: 92px;
`;

export const Title = styled.div`
    width: 996px;
    height: 92px;
    ${cssFlexBox}
    margin-bottom: 40px;
`;

export const Label = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
`;

export const Input = styled.input`
    ${cssTextInput}
    font-size: 16px;
`;

export const Content = styled.div`
    width: 996px;
    height: 520px;
    ${cssFlexBox}
    margin-bottom: 16px;
`;

export const TextBox = styled.textarea`
    ${cssTextInput}
    resize: none;
    padding: 20px 0px;
`;

export const Address = styled.div`
    width: 996px;
    height: 228px;
    ${cssFlexBox}
    & > div:nth-of-type(n+2) {
        margin-bottom: 16px;
    }
    margin-bottom: 40px;
`;

export const AddressCheckWrapper = styled.div`
    ${cssFlexBox};
`;

export const AddressCheck = styled.div`
    ${cssTextInput}
    width: 77px;
    height: 52px;
    position: relative;
    &:after {
        content: "500000";
        font-size: 16px;
        position: absolute;
        top: 0.7rem;
        left: -1.2rem;
        color: #bdbdbd;
    }
`;

export const AddressCheckBtn = styled.button`
    width: 124px;
    height: 52px;
    background-color: black;
    margin-left: 16px;
    color: white;
    cursor: pointer;
`;

export const DisplayAddress = styled.div`
    ${cssTextInput}
    height: 52px;
`;

export const AddressInput = styled.input`
    ${cssTextInput}
    height: 52px;
`;

export const Youtube = styled.div`
    ${cssFlexBox}
    width: 996px;
    height: 92px;
    margin-bottom: 40px;
`;

export const YoutubeInput = styled.input`
    ${cssTextInput}
    height: 52px;
    font-weight: 400;
    background-color: white;
    font-size: 16px;
    text-indent: 20px;
`;

export const ImageUpload = styled.div`
    ${cssFlexBox}
    width: 282px;
    height: 118px;
    margin-bottom: 40px;
`;

export const UploadTitle = styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
    display: inline-block;
`;

export const WrapperUploadBtn = styled.div`
    ${cssFlexBox}
    height: 78px;
    justify-content: space-between;
`;

export const UploadBtn = styled.button`
    width: 78px;
    height: 78px;
    background-color: #bdbdbd;
    border: none;
    cursor: pointer;
    & > div {
        font-size: 12px;
        font-weight: 500;
        color: #4f4f4f;
    }

    & > div:nth-of-type(1) {
        font-size: 30px;
        line-height: 28px;
    }
`;

export const MainOption = styled.div`
    ${cssFlexBox}
    width: 159px;
    height: 64px;
    margin-bottom: 80px;
`;

export const WrapperOptionRadio = styled.div`
    ${cssFlexBox}
    & div {
        display: none;
    }

    & label {
        position: relative;
        cursor: pointer;
        font-size: 16px;
    }

    & * {
        vertical-align: middle;
    }

    & > label:nth-of-type(1) {
        margin-right: 10px;
    }

    & > label span {
        margin-left: 5px;
        font-weight: 500;
    }
`;

export const OptionRadio = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #ffd600;
    border-radius: 50%;

    &:checked+div {
        display: block;
        width: 0.7rem;
        height: 0.7rem;
        background-color: #ffd600;
        position: absolute;
        top: 8px;
        left: 4.5px;
        border-radius: 50%;
    }
`;

export const WrapperRegistBtn = styled.div`
    ${cssFlexBox}
    justify-content: center;
`

export const RegistBtn = styled.button`
    width: 179px;
    height: 52px;
    background-color: #FFD600;
    border: none;
    cursor: pointer;
    font-weight: 500;
`;