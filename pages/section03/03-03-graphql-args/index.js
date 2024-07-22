import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

export default function GraphqlReqPage() {
    const mutationOpt = gql`
        mutation createNewBoard($writer: String, $title: String, $contents: String) {
            createBoard(
                writer: $writer
                title: $title
                contents: $contents
            ) {
                _id
                number
                message
            }
        }
    `;

    const [number, setNumber] = useState(0);

    const [mutation] = useMutation(mutationOpt);

    const onClickMutation = async () => {
        const response = await mutation({
            variables: { // $ -> variables
                writer: "유유",
                title: "우유주세요",
                contents: "많이 주세요"
            }
        });
        console.log(response);
        setNumber(response.data.createBoard.number);
    };

    return (
        <>
            <div>{number}</div>
            <button onClick={onClickMutation}>mutation!</button>
        </>
    );
}

