import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function DynamicRoutingPageMoved() {
    const router = useRouter();
    const number = parseInt(router.query.number);

    const queryOpt = gql`
        query getBoard($number: Int) {
            fetchBoard(number: $number) {
                number
                writer
                title
                contents
            }
        }
    `;

    const {loading, data, error} = useQuery(queryOpt, {
        variables: {
            number: number
        }
    });

    const goTotheBack = () => {
        router.push("../");
    }

    return (
        <div>
            <span>{number}번 게시물</span>
            <div>게시물 번호: {loading? "loading.." : data.fetchBoard? data.fetchBoard.number : error? error.message : "X"}</div>
            <div>게시물 글쓴이: {loading? "loading.." : data.fetchBoard? data.fetchBoard.writer : error? error.message : "X"}</div>
            <div>게시물 제목: {loading? "loading.." : data.fetchBoard? data.fetchBoard.title : error? error.message : "X"}</div>
            <div>게시물 내용: {loading? "loading.." : data.fetchBoard? data.fetchBoard.contents : error? error.message : "X"}</div>
            <br></br>
            <button onClick={goTotheBack}>돌아가기</button>
        </div>
    )
}