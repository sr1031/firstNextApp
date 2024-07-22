import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

export default function GraphqlReqPage() {
    const mutationOpt = gql`
        mutation {
            createBoard(
                writer: "db"
                title: "db스럽네요"
                contents: "dbdbdbdbdbdbdb!!!"
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
        const response = await mutation();
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

