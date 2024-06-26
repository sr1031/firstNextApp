import Head from "next/head";
import { Global } from "@emotion/react";
import { global } from "../../../styles/section01/boards-new/globals";
import {
    Base,
    Container,
    Wrapper,
    Header,
    WrapperInfo,
    WrapperUser,
    Title,
    Label,
    Input,
    ErrorValidate,
    Content,
    TextBox,
    Address,
    AddressCheckWrapper,
    LoadAddressInput,
    PostNumInput,
    AddressCheckBtn,
    DetailAddressInput,
    Youtube,
    YoutubeLinkInput,
    ImageUpload,
    UploadTitle,
    WrapperUploadBtn,
    UploadBtn,
    FileInput,
    MainOption,
    WrapperOptionRadio,
    OptionImage,
    OptionRadio,
    WrapperRegistBtn,
    RegistBtn
} from "../../../styles/section01/boards-new/01-boards-style";
import { useState } from "react";
import PopUpPage from "./pop/popup";

export default function RegistPage() {
    const [errorReasons, setErrorReasons] = useState([]);
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [address, setAddress] = useState("");
    const [ytLink, setYtLink] = useState("");
    const [image, setImage] = useState([]);
    const [mainOption, setMainOption] = useState("");

    const onChangeInput = (setFunc) => (event) => {
        setFunc(event.target.value);
    };

    const displayError = (reason, input) => {
        return errorReasons.includes(reason) && !input;
    };

    const onUploadImage = (setFunc) => (event) => {
        const uploadImages = [];
        uploadImages.push(event.target.value);
        console.log(uploadImages);
        setFunc(uploadImages);
    }

    const onChangeOption = (setFunc) => (event) => {
        setFunc(event.target.value);
    };

    const clickModal = () => {
        setShowModal(!showModal);
    };

    const validate = () => {
        const reasons = [];
        if (!userName) reasons.push("name");

        if (!userPassword) reasons.push("password");

        if (!title) reasons.push("title");

        if (!content) reasons.push("content");

        if (reasons.length === 0) {
            alert("등록 성공!");
            setErrorReasons([]);
        } else {
            alert("다시 시도해주세요.");
            setErrorReasons(reasons);
        }
    };

    return (
        <>
            <Global styles={global}></Global>
            <Head>
                <title>Register</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Base>
                <Container>
                    <Wrapper column>
                        <Header>게시물 등록</Header>
                        <WrapperInfo>
                            <WrapperUser column>
                                <Label>작성자</Label>
                                <Input
                                    placeholder="이름을 적어주세요"
                                    onChange={onChangeInput(setUserName)}
                                ></Input>
                                <ErrorValidate isDp={displayError("name", userName)}>
                                    이름을 적어주세요
                                </ErrorValidate>
                            </WrapperUser>
                            <WrapperUser column>
                                <Label>비밀번호</Label>
                                <Input
                                    placeholder="비밀번호를 입력해주세요"
                                    onChange={onChangeInput(setUserPassword)}
                                />
                                <ErrorValidate isDp={displayError("password", userPassword)}>
                                    비밀번호를 적어주세요
                                </ErrorValidate>
                            </WrapperUser>
                        </WrapperInfo>
                        <Title column>
                            <Label>제목</Label>
                            <Input
                                type="text"
                                placeholder="제목을 작성해주세요"
                                onChange={onChangeInput(setTitle)}
                            ></Input>
                            <ErrorValidate isDp={displayError("title", title)}>
                                제목을 적어주세요
                            </ErrorValidate>
                        </Title>
                        <Content column>
                            <Label>내용</Label>
                            <TextBox
                                placeholder="내용을 입력해주세요"
                                onChange={onChangeInput(setContent)}
                            />
                            <ErrorValidate isDp={displayError("content", content)}>
                                내용을 입력해주세요
                            </ErrorValidate>
                        </Content>
                        <Address column>
                            <Label>주소</Label>
                            <AddressCheckWrapper>
                                <PostNumInput />
                                <AddressCheckBtn onClick={clickModal}>
                                    우편번호 검색
                                </AddressCheckBtn>
                            </AddressCheckWrapper>
                            <LoadAddressInput
                                defaultValue={address}
                                readOnly
                            />
                            <DetailAddressInput />
                        </Address>
                        <Youtube column>
                            <Label>유튜브</Label>
                            <YoutubeLinkInput placeholder="링크를 복사해주세요" />
                        </Youtube>
                        <ImageUpload column>
                            <UploadTitle>사진 첨부</UploadTitle>
                            <WrapperUploadBtn>
                                <UploadBtn>
                                    <FileInput type="file" accept="image/*" onChange={onUploadImage(setImage)}></FileInput>
                                    <div>+</div>
                                    <div>Upload</div>
                                </UploadBtn>
                                <UploadBtn>
                                    <FileInput type="file" accept="image/*" onChange={onUploadImage(setImage)}></FileInput>
                                    <div>+</div>
                                    <div>Upload</div>
                                </UploadBtn>
                                <UploadBtn>
                                    <FileInput type="file" accept="image/*" onChange={onUploadImage(setImage)}></FileInput>
                                    <div>+</div>
                                    <div>Upload</div>
                                </UploadBtn>
                            </WrapperUploadBtn>
                        </ImageUpload>
                        <MainOption column>
                            <Label>메인 설정</Label>
                            <WrapperOptionRadio>
                                <label htmlFor="youtube">
                                    <OptionRadio
                                        type="radio"
                                        id="youtube"
                                        value="youtube"
                                        name="mainOption"
                                        onChange={onChangeOption(setMainOption)}
                                    />
                                    <OptionImage
                                        url={
                                            mainOption === "youtube"
                                                ? "/bt_radio_on.png"
                                                : "/Ellipse.png"
                                        }
                                    ></OptionImage>
                                    <span>유튜브</span>
                                </label>
                                <label htmlFor="image">
                                    <OptionRadio
                                        type="radio"
                                        id="image"
                                        value="image"
                                        name="mainOption"
                                        onChange={onChangeOption(setMainOption)}
                                    />
                                    <OptionImage
                                        url={
                                            mainOption === "image"
                                                ? "/bt_radio_on.png"
                                                : "/Ellipse.png"
                                        }
                                    ></OptionImage>
                                    <span>이미지</span>
                                </label>
                            </WrapperOptionRadio>
                        </MainOption>
                        <WrapperRegistBtn>
                            <RegistBtn onClick={validate}>등록하기</RegistBtn>
                        </WrapperRegistBtn>
                    </Wrapper>
                </Container>
            </Base>
            {showModal && (
                <PopUpPage
                    showModal={showModal}
                    clickModal={clickModal}
                    addrState={[address, setAddress]}
                ></PopUpPage>
            )}
        </>
    );
}

