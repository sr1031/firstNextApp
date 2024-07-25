import { gql, useQuery } from "@apollo/client"

export default function StaticRoutingMoved25715() {

    const queryOpt = gql`
        query getBoardByNumber($number: Int) {
            fetchBoard(number: $number) {
                number
                writer
                title
                contents
            }
        }
    `

    const {loading, data, error} = useQuery(queryOpt, {
        variables: {
            number: 25715
        }
    });

    return (
        <div>
            <span>25715번 게시물</span>
            <div>게시물 번호: {loading? "loading.." : data.fetchBoard? data.fetchBoard.number : error? error.message : "X"}</div>
            <div>게시물 글쓴이: {loading? "loading.." : data.fetchBoard? data.fetchBoard.writer : error? error.message : "X"}</div>
            <div>게시물 제목: {loading? "loading.." : data.fetchBoard? data.fetchBoard.title : error? error.message : "X"}</div>
            <div>게시물 내용: {loading? "loading.." : data.fetchBoard? data.fetchBoard.contents : error? error.message : "X"}</div>
        </div>
    )
}