import { gql, useQuery } from "@apollo/client";
import {
    ContainerHeader,
    ContainerMain,
    HeaderBottomLine,
    InfoDate,
    InfoWriter,
    Link,
    LinkAndLocation,
    Location,
    MainContent,
    MainTitle,
    ProfileAndInfo,
    ProfileImage,
    ProfileInfo,
    WrapperHeaderMain
} from "../../../styles/boards/boards-number/boards-detail-style";
import Frame from "../Frame";
import { useRouter } from "next/router";

export default function BoardDetailPage() {
    const router = useRouter();
    const QUERY_OPT = gql`
        query getBoard($number: Int) {
            fetchBoard(number: $number) {
                number
                writer
                title
                contents
                createdAt
            }
        }
    `;

    const convertDateToString = (dateString) => {
        return dateString.substring(0, dateString.indexOf("T"));
    };

    const { loading, data, error } = useQuery(QUERY_OPT, {
        variables: {
            number: parseInt(router.query.number)
        }
    });


    if (error) {
        console.log(error.message);
        return <div>{error.message}</div>;
    }

    return (
        <>
            <Frame pageTitle={"boardDetail"}>
                <ContainerHeader column>
                    <WrapperHeaderMain>
                        <ProfileAndInfo>
                            <ProfileImage></ProfileImage>
                            <ProfileInfo column>
                                <InfoWriter>
                                    {loading
                                        ? "LOADING..."
                                        : data
                                        ? data.fetchBoard.writer
                                        : "null인 게시물"}
                                </InfoWriter>
                                <InfoDate>
                                    {loading
                                        ? "LOADING..."
                                        : data
                                        ? convertDateToString(data.fetchBoard.createdAt)
                                        : "null인 게시물"}
                                </InfoDate>
                            </ProfileInfo>
                        </ProfileAndInfo>
                        <LinkAndLocation>
                            <Link></Link>
                            <Location></Location>
                        </LinkAndLocation>
                    </WrapperHeaderMain>
                    <HeaderBottomLine></HeaderBottomLine>
                </ContainerHeader>
                <ContainerMain>
                    <MainTitle>
                        {loading
                            ? "LOADING..."
                            : data
                            ? data.fetchBoard.title
                            : "null인 게시물"}
                    </MainTitle>
                    <MainContent>
                        {loading
                            ? "LOADING..."
                            : data
                            ? data.fetchBoard.contents
                            : "null인 게시물"}
                    </MainContent>
                </ContainerMain>
            </Frame>
        </>
    );
}

