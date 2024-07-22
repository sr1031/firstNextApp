import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

export default function MyGraphQLTest() { // graphql loading에 대한 고찰
    const mutationOpt = gql`
        mutation createBoard(
            $writer: String
            $title: String
            $contents: String
        ) {
            createBoard(writer: $writer, title: $title, contents: $contents) {
                _id
                number
                message
            }
        }
    `;

    const queryOpt = gql`
        query fetchByNumber($number: Int) {
            fetchBoard(number: $number) {
                number
                writer
                title
                contents
            }
        }
    `;

    const [createBoard, m] = useMutation(mutationOpt);
    const [number, setNumber] = useState(0);
    const [isFetch, setIsFetch] = useState(false);

    const createOnClick = () => {
        createBoard({
            variables: {
                writer: "허리",
                title: "언제까지 일해야 할까요?",
                contents: "이제 저도 좀 쉬고 싶습니다. 어떻게 해야 할까요?.."
            }
        }).then((response) => {
            setNumber(response.data.createBoard.number);
            console.log(number);
        });
    };

    const fetchOnClick = () => {
        setIsFetch(!isFetch);
    };

    const FetchBoard = () => {
        const { loading, data, error } = useQuery(queryOpt, {
            variables: {
                number: number
            }
        });

        return (
            <>
                <div>
                    <p>
                        response:{" "}
                        {loading
                            ? "loading.."
                            : JSON.stringify(data.fetchBoard)}
                    </p>
                </div>
            </>
        );
    };

    return (
        <>
            <div>
                <div>
                    number: {m.loading? -11111 : number}
                    <button onClick={createOnClick}>create!</button>
                </div>
                <div>
                    {isFetch && <FetchBoard></FetchBoard>}{" "}
                    <button onClick={fetchOnClick}>fetch!</button>
                </div>
            </div>
        </>
    );
}

