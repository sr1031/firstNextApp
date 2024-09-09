import * as S from './BoardNew.style';
import PopUpPage from './popup/Popup';
import LoadingPopup from './popup/loading/LoadingPopup';
import Frame from '../../commons/Frame';
import { cssFlexBox } from '../../commons/insertCss';
import { css } from '@emotion/react';

export default function BoardRegistPageUI({ states, funcs }) {
    const [
        onClickInput,
        onChangeInput,
        onModalShow,
        clickReqModal,
        displayError,
    ] = funcs;
    const [
        {
            userName,
            userEmail,
            userPassword,
            userPasswordCheck,
            mainAddress,
            mainOption,
        },
        { showModal, loadingModal },
    ] = states;
    return (
        <>
            <Frame pageTitle={'BoardWrite'}>
                <S.Header>회원 등록</S.Header>
                <S.WrapperUser column>
                    <S.LabelWrapper>
                        성명
                        <S.Label style={{ color: 'red', marginLeft: '4px' }}>
                            *
                        </S.Label>
                    </S.LabelWrapper>

                    <S.Input
                        placeholder="성명을 적어주세요"
                        name="userName"
                        onChange={onChangeInput}
                    ></S.Input>
                    <S.ErrorValidate isDp={displayError('name', userName)}>
                        성명을 적어주세요
                    </S.ErrorValidate>
                </S.WrapperUser>
                <S.WrapperInfo column>
                    <S.WrapperUser column>
                        <S.LabelWrapper>
                            이메일
                            <S.Label
                                style={{ color: 'red', marginLeft: '4px' }}
                            >
                                *
                            </S.Label>
                        </S.LabelWrapper>
                        <S.Input
                            onFocus={onClickInput('이메일을 적어주세요')}
                            name="userEmail"
                            onChange={onChangeInput}
                        ></S.Input>
                        <S.ErrorValidate
                            isDp={displayError('email', userEmail)}
                        >
                            이메일을 적어주세요
                        </S.ErrorValidate>
                    </S.WrapperUser>
                    <S.WrapperUser column>
                        <S.LabelWrapper>
                            비밀번호
                            <S.Label
                                style={{ color: 'red', marginLeft: '4px' }}
                            >
                                *
                            </S.Label>
                        </S.LabelWrapper>
                        <S.Input
                            placeholder="비밀번호를 입력해주세요"
                            name="userPassword"
                            onChange={onChangeInput}
                        />
                        <S.ErrorValidate
                            isDp={displayError('password', userPassword)}
                        >
                            비밀번호를 적어주세요
                        </S.ErrorValidate>
                    </S.WrapperUser>
                    <S.WrapperUser column>
                        <S.LabelWrapper>
                            비밀번호 확인
                            <S.Label
                                style={{ color: 'red', marginLeft: '4px' }}
                            >
                                *
                            </S.Label>
                        </S.LabelWrapper>
                        <S.Input
                            placeholder="비밀번호를 한번 더 입력해주세요"
                            name="userPasswordCheck"
                            onChange={onChangeInput}
                        />
                        <S.ErrorValidate
                            isDp={displayError(
                                'passwordCheck',
                                userPasswordCheck
                            )}
                        >
                            비밀번호를 한번 더 적어주세요
                        </S.ErrorValidate>
                    </S.WrapperUser>
                </S.WrapperInfo>
                <S.Address column>
                    <S.Label>주소</S.Label>
                    <S.AddressCheckWrapper>
                        <S.PostNumInput />
                        <S.AddressCheckBtn onClick={onModalShow('showModal')}>
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
                <S.MainOption column>
                    <S.Label style={{ marginBottom: '15px' }}>
                        관심분야
                    </S.Label>
                    <S.WrapperOptionRadio>
                        <label htmlFor="art">
                            <S.OptionRadio
                                type="radio"
                                id="art"
                                value="art"
                                name="mainOption"
                                onChange={onChangeInput}
                            />
                            <S.OptionImage
                                url={
                                    mainOption === 'art'
                                        ? '/bt_radio_on.png'
                                        : '/Ellipse.png'
                                }
                            ></S.OptionImage>
                            <span>그림</span>
                        </label>
                        <label htmlFor="jewellery">
                            <S.OptionRadio
                                type="radio"
                                id="jewellery"
                                value="jewellery"
                                name="mainOption"
                                onChange={onChangeInput}
                            />
                            <S.OptionImage
                                url={
                                    mainOption === 'jewellery'
                                        ? '/bt_radio_on.png'
                                        : '/Ellipse.png'
                                }
                            ></S.OptionImage>
                            <span>주얼리</span>
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
