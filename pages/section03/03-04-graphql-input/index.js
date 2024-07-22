import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const GetBoardCompnt = (props) => {
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

    const { loading, data, error } = props.num
        ? useQuery(queryOpt, {
              variables: {
                  number: props.num
              }
          })
        : {};

    return <div>{JSON.stringify(data ? data.fetchBoard : {})}</div>;
};

export default function GraphqlReqPage() {
    const mutationOpt = gql`
        mutation createBoard($writer: String, $title: String, $contents: String) {
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
    const [isFetch, setIsFetch] = useState(false);
    const [mutation] = useMutation(mutationOpt);

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const onClickMutation = async () => {
        const response = await mutation({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        });
        console.log(response);
        setNumber(response.data.createBoard.number);
    };

    const onClickQuery = () => {
        setIsFetch(!isFetch);
    };

    const onChangeInput = (setState) => (event) => {
        setState(event.target.value);
    }

    return (
        <>
            writer: <input type="text" onChange={onChangeInput(setWriter)} /><br></br>
            title: <input type="text" onChange={onChangeInput(setTitle)} /> <br></br>
            contents: <input type="text" onChange={onChangeInput(setContents)} />
            <div>{number}</div>
            <button onClick={onClickMutation}>mutation!</button>
            <button onClick={onClickQuery}>query!</button>
            <GetBoardCompnt num={isFetch? number : undefined}></GetBoardCompnt>
        </>
    );
}

