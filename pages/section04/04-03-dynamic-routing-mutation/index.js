import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function DynamicRoutingMutationPage() {
    const router = useRouter();
    const [allInputs, setAllInputs] = useState({
        writer: "",
        title: "",
        contents: ""
    });

    const [isTwinkle, setIsTwinkle] = useState(false);

    const errorRef = useRef({});
    const divArray = ["writer", "title", "contents"];

    const mutationOpt = gql`
        mutation createABoard(
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

    const [createBoardMutation, info] = useMutation(mutationOpt);

    const onClick = () => {
        let isValidated = true;
        divArray.forEach((v) => {
            if (!/^.*[ㄱ-힣a-z]+.*$/.test(allInputs[v])) {
                errorRef.current[v].style.display = "block";
                isValidated = false;
            } else errorRef.current[v].style.display = "none";
        });

        if (!isValidated) return;

        createBoardMutation({
            variables: {
                writer: allInputs["writer"],
                title: allInputs["title"],
                contents: allInputs["contents"]
            }
        })
            .then((res) => {
                const createdBoard = res.data.createBoard;
                router.push(
                    `/section04/04-03-dynamic-routing-mutation/moved/${parseInt(
                        createdBoard.number
                    )}`
                );
            })
            .catch((reason) => {
                console.log(reason);
                router.push("/section04/04-03-dynamic-routing-mutation");
            });

        router.push("/section04/04-03-dynamic-routing-mutation/loading");
    };

    const onChange = (name) => (e) => {
        setAllInputs((prev) => {
            return { ...prev, [name]: e.target.value };
        });

        let isCompleted = true;

        divArray.forEach((v) => {
            if (name === v)
                isCompleted = isCompleted && e.target.value;

            else
                isCompleted = isCompleted && allInputs[v];
        });

        setIsTwinkle(isCompleted);
    };

    return (
        // [...Array(3).keys()] == [0,1,2] 로 인덱스만 임시 생성 가능
        <>
            {divArray.map((v) => (
                <div key={v}>
                    {v}:{" "}
                    <input
                        type="text"
                        onChange={onChange(v)}
                    />
                    <br></br>
                    <div
                        ref={(el) => (errorRef.current[v] = el)}
                        style={{ color: "red", display: "none" }}
                    >
                        {v} 입력 필수!
                    </div>
                </div>
            ))}
            <button style={{backgroundColor: isTwinkle? "yellow" : ""}} onClick={onClick}>신규 게시물 등록!</button>
        </>
    );
}

