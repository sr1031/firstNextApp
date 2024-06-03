import Head from 'next/head';
import { Global } from '@emotion/react';
import { global } from '../../../styles/section01/boards-new/globals';
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
    Content,
    TextBox,
    Address,
    AddressCheckWrapper,
    DisplayAddress,
    AddressCheck,
    AddressCheckBtn,
    AddressInput,
    Youtube,
    YoutubeInput,
    ImageUpload,
    UploadTitle,
    WrapperUploadBtn,
    UploadBtn,
    MainOption,
    WrapperOptionRadio,
    OptionRadio,
    WrapperRegistBtn,
    RegistBtn,
} from '../../../styles/section01/boards-new/01-boards-style';
import { useState } from 'react';

export default function regist() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const []

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
                                <Input placeholder='이름을 적어주세요'></Input>
                            </WrapperUser>
                            <WrapperUser column>
                                <Label>비밀번호</Label>
                                <Input placeholder='비밀번호를 입력해주세요'></Input>
                            </WrapperUser>
                        </WrapperInfo>
                        <Title column>
                            <Label>제목</Label>
                            <Input
                                type="text"
                                placeholder="제목을 작성해주세요"
                            ></Input>
                        </Title>
                        <Content column>
                            <Label>내용</Label>
                            <TextBox placeholder="내용을 입력해주세요"></TextBox>
                        </Content>
                        <Address column>
                            <Label>주소</Label>
                            <AddressCheckWrapper>
                                <AddressCheck></AddressCheck>
                                <AddressCheckBtn>우편번호 검색</AddressCheckBtn>
                            </AddressCheckWrapper>
                            <DisplayAddress></DisplayAddress>
                            <AddressInput></AddressInput>
                        </Address>
                        <Youtube column>
                            <Label>유튜브</Label>
                            <YoutubeInput placeholder="링크를 복사해주세요"></YoutubeInput>
                        </Youtube>
                        <ImageUpload column>
                            <UploadTitle>사진 첨부</UploadTitle>
                            <WrapperUploadBtn>
                                <UploadBtn>
                                    <div>+</div>
                                    <div>Upload</div>
                                </UploadBtn>
                                <UploadBtn>
                                    <div>+</div>
                                    <div>Upload</div>
                                </UploadBtn>
                                <UploadBtn>
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
                                        value={'youtube'}
                                        name="mainOption"
                                    />
                                    <div></div>
                                    <span>유튜브</span>
                                </label>
                                <label htmlFor="image">
                                    <OptionRadio
                                        type="radio"
                                        id="image"
                                        value={'image'}
                                        name="mainOption"
                                    />
                                    <div></div>
                                    <span>이미지</span>
                                </label>
                            </WrapperOptionRadio>
                        </MainOption>
                        <WrapperRegistBtn>
                            <RegistBtn>등록하기</RegistBtn>
                        </WrapperRegistBtn>
                    </Wrapper>
                </Container>
            </Base>
        </>
    );
}
