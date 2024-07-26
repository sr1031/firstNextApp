import * as S from "./BoardNew.style";
import PopUpPage from "./popup/Popup";
import LoadingPopup from "./popup/loading/LoadingPopup";
import Frame from "../../commons/Frame";

export default function BoardRegistPageUI({ states, funcs }) {
    const [onChangeInput, onModalShow, clickReqModal, displayError] = funcs;
    const [
        { userName, userPassword, title, content, mainAddress, mainOption },
        { showModal, loadingModal }
    ] = states;
    return (
        <>
            <Frame pageTitle={"BoardWrite"}>
                <S.Header>게시물 등록</S.Header>
                <S.WrapperInfo>
                    <S.WrapperUser column>
                        <S.Label>작성자</S.Label>
                        <S.Input
                            placeholder="이름을 적어주세요"
                            name="userName"
                            onChange={onChangeInput}
                        ></S.Input>
                        <S.ErrorValidate isDp={displayError("name", userName)}>
                            이름을 적어주세요
                        </S.ErrorValidate>
                    </S.WrapperUser>
                    <S.WrapperUser column>
                        <S.Label>비밀번호</S.Label>
                        <S.Input
                            placeholder="비밀번호를 입력해주세요"
                            name="userPassword"
                            onChange={onChangeInput}
                        />
                        <S.ErrorValidate
                            isDp={displayError("password", userPassword)}
                        >
                            비밀번호를 적어주세요
                        </S.ErrorValidate>
                    </S.WrapperUser>
                </S.WrapperInfo>
                <S.Title column>
                    <S.Label>제목</S.Label>
                    <S.Input
                        type="text"
                        placeholder="제목을 작성해주세요"
                        name="title"
                        onChange={onChangeInput}
                    ></S.Input>
                    <S.ErrorValidate isDp={displayError("title", title)}>
                        제목을 적어주세요
                    </S.ErrorValidate>
                </S.Title>
                <S.Content column>
                    <S.Label>내용</S.Label>
                    <S.TextBox
                        placeholder="내용을 입력해주세요"
                        name="content"
                        onChange={onChangeInput}
                    />
                    <S.ErrorValidate isDp={displayError("content", content)}>
                        내용을 입력해주세요
                    </S.ErrorValidate>
                </S.Content>
                <S.Address column>
                    <S.Label>주소</S.Label>
                    <S.AddressCheckWrapper>
                        <S.PostNumInput />
                        <S.AddressCheckBtn onClick={onModalShow("showModal")}>
                            우편번호 검색
                        </S.AddressCheckBtn>
                    </S.AddressCheckWrapper>
                    <S.LoadAddressInput
                        defaultValue={mainAddress}
                        readOnly
                    />
                    <S.DetailAddressInput
                        name="detailAddress"
                        onChange={onChangeInput}
                    />
                </S.Address>
                <S.Youtube column>
                    <S.Label>유튜브</S.Label>
                    <S.YoutubeLinkInput
                        name="ytLink"
                        onChange={onChangeInput}
                        placeholder="링크를 복사해주세요"
                    />
                </S.Youtube>
                <S.ImageUpload column>
                    <S.UploadTitle>사진 첨부</S.UploadTitle>
                    <S.WrapperUploadBtn>
                        <S.UploadBtn>
                            <S.FileInput
                                type="file"
                                accept="image/*"
                                name="image1"
                                onChange={onChangeInput}
                            ></S.FileInput>
                            <div>+</div>
                            <div>Upload</div>
                        </S.UploadBtn>
                        <S.UploadBtn>
                            <S.FileInput
                                type="file"
                                name="image2"
                                accept="image/*"
                                onChange={onChangeInput}
                            ></S.FileInput>
                            <div>+</div>
                            <div>Upload</div>
                        </S.UploadBtn>
                        <S.UploadBtn>
                            <S.FileInput
                                type="file"
                                name="image3"
                                accept="image/*"
                                onChange={onChangeInput}
                            ></S.FileInput>
                            <div>+</div>
                            <div>Upload</div>
                        </S.UploadBtn>
                    </S.WrapperUploadBtn>
                </S.ImageUpload>
                <S.MainOption column>
                    <S.Label>메인 설정</S.Label>
                    <S.WrapperOptionRadio>
                        <label htmlFor="youtube">
                            <S.OptionRadio
                                type="radio"
                                id="youtube"
                                value="youtube"
                                name="mainOption"
                                onChange={onChangeInput}
                            />
                            <S.OptionImage
                                url={
                                    mainOption === "youtube"
                                        ? "/bt_radio_on.png"
                                        : "/Ellipse.png"
                                }
                            ></S.OptionImage>
                            <span>유튜브</span>
                        </label>
                        <label htmlFor="image">
                            <S.OptionRadio
                                type="radio"
                                id="image"
                                value="image"
                                name="mainOption"
                                onChange={onChangeInput}
                            />
                            <S.OptionImage
                                url={
                                    mainOption === "image"
                                        ? "/bt_radio_on.png"
                                        : "/Ellipse.png"
                                }
                            ></S.OptionImage>
                            <span>이미지</span>
                        </label>
                    </S.WrapperOptionRadio>
                </S.MainOption>
                <S.WrapperRegistBtn>
                    <S.RegistBtn
                        onClick={clickReqModal}
                        name="loadingModal"
                    >
                        등록하기
                    </S.RegistBtn>
                </S.WrapperRegistBtn>

                {loadingModal && (
                    <LoadingPopup
                        modalState={[loadingModal, onModalShow]}
                    ></LoadingPopup>
                )}
                {showModal && (
                    <PopUpPage
                        modalState={[showModal, onModalShow]}
                        onChangeFunc={onChangeInput}
                    ></PopUpPage>
                )}
            </Frame>
        </>
    );
}

