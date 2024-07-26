import * as S from "./BoardsDetail.style";
import Frame from "../../commons/Frame";

export default function BoardDetailPageUI({
    loading,
    data,
    pageTitle,
    convertDateToString
}) {
    return (
        <>
            <Frame pageTitle={pageTitle}>
                <S.ContainerHeader column>
                    <S.WrapperHeaderMain>
                        <S.ProfileAndInfo>
                            <S.ProfileImage/>
                            <S.ProfileInfo column>
                                <S.InfoWriter>
                                    {loading
                                        ? "LOADING..."
                                        : data
                                        ? data.fetchBoard.writer
                                        : "null인 게시물"}
                                </S.InfoWriter>
                                <S.InfoDate>
                                    {loading
                                        ? "LOADING..."
                                        : data
                                        ? convertDateToString(
                                              data.fetchBoard.createdAt
                                          )
                                        : "null인 게시물"}
                                </S.InfoDate>
                            </S.ProfileInfo>
                        </S.ProfileAndInfo>
                        <S.LinkAndLocation>
                            <S.Link/>
                            <S.Location/>
                        </S.LinkAndLocation>
                    </S.WrapperHeaderMain>
                    <S.HeaderBottomLine/>
                </S.ContainerHeader>
                <S.ContainerMain>
                    <S.MainTitle>
                        {loading
                            ? "LOADING..."
                            : data
                            ? data.fetchBoard.title
                            : "null인 게시물"}
                    </S.MainTitle>
                    <S.MainContent>
                        {loading
                            ? "LOADING..."
                            : data
                            ? data.fetchBoard.contents
                            : "null인 게시물"}
                    </S.MainContent>
                </S.ContainerMain>
            </Frame>
        </>
    );
}

