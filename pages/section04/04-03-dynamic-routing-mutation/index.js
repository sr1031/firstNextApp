import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function DynamicRoutingMutationPage() {
    const router = useRouter();
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const errorRef = useRef({});
    const divArray = [
        [setWriter, "writer"],
        [setTitle, "title"],
        [setContents, "contents"]
    ];

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
        const errorDivs = [];
        if (!/^.*[ㄱ-힣a-z]+.*$/.test(writer)) {
            errorDivs.push("writer");
            console.log("writer");
        }

        if (!/^.*[ㄱ-힣a-z]+.*$/.test(title)) {
            errorDivs.push("title");
            console.log("title");
        }

        if (!/^.*[ㄱ-힣a-z]+.*$/.test(contents)) {
            errorDivs.push("contents");
            console.log("contents");
        }

        if (errorDivs.length !== 0) {
            divArray.forEach((v) => {
                if (errorDivs.includes(v[1]))
                    errorRef.current[v[1]].style.display = "block";
                else errorRef.current[v[1]].style.display = "none";
            });
            return;
        }

        createBoardMutation({
            variables: {
                writer: writer,
                title: title,
                contents: contents
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

    const onChange = (setFunc) => (e) => {
        setFunc(e.target.value);
    };

    return (
        // [...Array(3).keys()] == [0,1,2] 로 인덱스만 임시 생성 가능
        <>
            {divArray.map((v) => (
                <div key={v[1]}>
                    {v[1]}:{" "}
                    <input
                        type="text"
                        onChange={onChange(v[0])}
                    />
                    <br></br>
                    <div
                        ref={(el) => (errorRef.current[v[1]] = el)}
                        style={{ color: "red", display: "none" }}
                    >
                        {v[1]} 입력 필수!
                    </div>
                </div>
            ))}
            <button onClick={onClick}>신규 게시물 등록!</button>
        </>
    );
}

