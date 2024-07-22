import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const GetBoardCompnt = (props) => {
    const queryOpt = gql`
        query fetchById($_id: ID) {
            fetchProduct(productId: $_id) {
                _id
                seller
                name
                detail
                price
                createdAt
            }
        }
    `;

    const { loading, data, error } = props.id
        ? useQuery(queryOpt, {
              variables: {
                  _id: props.id
              }
          })
        : {};

    return <div>{JSON.stringify(data ? data.fetchProduct : {})}</div>;
};

export default function GraphqlReqPage() {
    const mutationOpt = gql`
        mutation createAProduct(
            $seller: String
            $createProductInput: CreateProductInput!
        ) {
            createProduct(
                seller: $seller
                createProductInput: $createProductInput
            ) {
                _id
                number
                message
            }
        }
    `;

    const [id, setId] = useState("");
    const [isFetch, setIsFetch] = useState(false);
    const [mutation] = useMutation(mutationOpt);

    const [seller, setSeller] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState(0);

    const onClickMutation = async () => {
        const response = await mutation({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: parseInt(price)
                }
            }
        });
        console.log(response);
        setId(response.data.createProduct._id);
    };

    const onClickQuery = () => {
        setIsFetch(!isFetch);
    };

    const onChangeInput = (setState) => (event) => {
        setState(event.target.value);
    };

    return (
        <>
            seller:{" "}
            <input
                type="text"
                onChange={onChangeInput(setSeller)}
            />
            <br></br>
            name:{" "}
            <input
                type="text"
                onChange={onChangeInput(setName)}
            />
            <br></br>
            detail:{" "}
            <input
                type="text"
                onChange={onChangeInput(setDetail)}
            />{" "}
            <br></br>
            price:{" "}
            <input
                type="text"
                onChange={onChangeInput(setPrice)}
            />
            <div>{id}</div>
            <button onClick={onClickMutation}>mutation!</button>
            <button onClick={onClickQuery}>query!</button>
            <GetBoardCompnt id={isFetch ? id : undefined}></GetBoardCompnt>
        </>
    );
}

