import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 500px;
    height: 500px;
    background-image: url("/loading.gif");
    background-size: cover;
    background-repeat: no-repeat;
`;

export const LoadingGif = styled.img`
    width: 100%;
    height: 100%;
    content: url("/loading.gif");
`;