import styled from "@emotion/styled";
import { cssFlexBox, cssTextInput } from "../insertCss";

export const Base = styled.div`
    width: 100vi;
    ${cssFlexBox}
    justify-content: center;
`;

export const Container = styled.div({
    width: "1200px",
    marginTop: "30px",
    boxShadow: "0px 4px 20px 0px #00000033"
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
`;

export const Title = styled.div`
    width: 996px;
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

export const ErrorValidate = styled.div`
    color: red;
    font-size: 16px;
    display: ${(props) => props.isDp? "block" : "none"};
`;

export const Content = styled.div`
    width: 996px;
    ${cssFlexBox}
    margin-bottom: 16px;
`;

export const TextBox = styled.textarea`
    ${cssTextInput}
    height: 480px;
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

export const PostNumInput = styled.input`
    ${cssTextInput}
    width: 77px;
    height: 52px;
    pointer-events: none;
    color: #bdbdbd;
`;

export const AddressCheckBtn = styled.button`
    width: 124px;
    height: 52px;
    background-color: black;
    margin-left: 16px;
    color: white;
    cursor: pointer;
`;

export const LoadAddressInput = styled.input`
    ${cssTextInput}
    height: 52px;
    margin-bottom: 16px;
    pointer-events: none;
`;

export const DetailAddressInput = styled.input`
    ${cssTextInput}
    height: 52px;
`;

export const Youtube = styled.div`
    ${cssFlexBox}
    width: 996px;
    height: 92px;
    margin-bottom: 40px;
`;

export const YoutubeLinkInput = styled.input`
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
    position: relative;
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

export const FileInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    cursor: pointer;
    width: 100%;
    height: 100%;
`;

export const MainOption = styled.div`
    ${cssFlexBox}
    height: 64px;
    margin-bottom: 80px;
`;

export const WrapperOptionRadio = styled.div`
    ${cssFlexBox}

    & * {
        vertical-align: middle;
    }

    & label {
        cursor: pointer;
        font-size: 16px;
        position: relative;
        width: 100px;
    }

    & > label > span {
        position: absolute;
        top: 0;
        left: 27px;
    }
`;

export const OptionRadio = styled.input`
    appearance: none;

    &:checked {
        display: none;
    }
`;

export const OptionImage = styled.img`
    content: url(${(props) => props.url});
`;

export const WrapperRegistBtn = styled.div`
    ${cssFlexBox}
    justify-content: center;
`;

export const RegistBtn = styled.button`
    width: 179px;
    height: 52px;
    background-color: #ffd600;
    border: none;
    cursor: pointer;
    font-weight: 500;
`;

