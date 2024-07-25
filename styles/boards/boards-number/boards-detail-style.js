import styled from "@emotion/styled";
import { cssFlexBox } from "../insertCss";

export const ContainerHeader = styled.div`
    width: 996px;
    height: 82px;
    ${cssFlexBox}
    justify-content: space-between;
`

export const WrapperHeaderMain = styled.div`
    width: 100%;
    height: 76px;
    ${cssFlexBox}
    justify-content: space-between;
    align-items: center;
`;

export const ProfileAndInfo = styled.div`
    width: calc(56px + 12px + 126px);
    height: 56px;
    ${cssFlexBox}
`

export const ProfileImage = styled.img`
    width: 54px;
    height: 54px;
    content: url("/ic_profile-56px.png");
    margin-right: 12px;
`

export const ProfileInfo = styled.div`
    width: 100%;
    height: 60px;
    ${cssFlexBox}
`

export const InfoWriter = styled.span`
    font-size: 24px;
    font-weight: 500;
`

export const InfoDate = styled.span`
    color: #828282;
    font-size: 16px;
    line-height: 23.68px;
`

export const LinkAndLocation = styled.div`
    width: 86px;
    height: 32px;
    ${cssFlexBox}
    justify-content: space-between;
`

export const HeaderBottomLine = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px #BDBDBD solid;
`
export const Link = styled.div`
    width: 32px;
    height: 32px;
    background-image: url("/ic_link-32px.png");
`

export const Location = styled.div`
    width: 32px;
    height: 32px;
    background-image: url("/ic_location_on-32px.png");
`

export const ContainerMain = styled.div`
    width: 100%;
    margin-top: 76px;
`

export const MainTitle = styled.div`
    width: 100%;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 37px;
`

export const MainContent = styled.div`
    width: 100%;
    font-size: 16px;
    font-weight: 400;
`