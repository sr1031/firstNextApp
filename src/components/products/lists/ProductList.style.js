import styled from "@emotion/styled";
import { cssFlexBox } from "../../globals";

export const Container = styled.div`
    ${cssFlexBox}
    width: 100vw;
    height: 100vh;
    justify-content: center;
    padding-top: 30px;
`;

export const Wrapper = styled.div`
    width: 1000px;
    height: 1200px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;

    @media screen and (max-width: 1048px) {
        width: 500px;
        height: 2000px;
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ProductContainer = styled.div`
    width: 250px;
    height: 400px;
    border: 1px black solid;
`;
export const Image = styled.img`
    width: 100%;
    height: 200px;
    content: url("/layla.png");
`;
export const InfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 5px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    height: 15%;
`

export const TitleWrapper = styled.div`
    width: 100%;
    ${cssFlexBox}
    justify-content: space-between;
`;

export const MainTitle = styled.div`
    height: 100%;
    font-weight: 700;

`;

export const Writer = styled.div`
    color: #b5b5b5;
`;

export const DivideLine = styled.div`
    width: 100%;
    height: 2px;
    border-bottom: 1px #a0a0a0 solid;
`
export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const MainContent = styled.div`
    width: 100%;
    height: 100%;
`;

