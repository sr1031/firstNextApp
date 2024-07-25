import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function DynamicRoutingPage() {
    const router = useRouter();
    const [boardNum, setBoardNum] = useState(25123);
    const errorRef = useRef(null);

    const onClick = () => {
        if (!/^[\d]+$/.test(boardNum)) {
            errorRef.current.style.display = "block";
            return;
        }

        router.push(
            `/section04/04-02-dynamic-routing-query/moved/${parseInt(boardNum)}`
        );
    };

    const onChange = (e) => {
        setBoardNum(e.target.value);
    };

    return (
        <>
            <input
                type="text"
                onChange={onChange}
            />
            <br></br>
            <div
                style={{ color: "red", display: "none" }}
                ref={errorRef}
            >
                숫자만 입력 가능!
            </div>
            <button onClick={onClick}>move</button>
        </>
    );
}

