import axios from "axios";
import { useState } from "react";

export default function axiosPage() {
    const [res, setRes] = useState("");

    const onAxios = async () => {
        const result = await axios.get("http://localhost:3000/boards"); //03-03-with-frontend backend API에 요청
        console.log(result.data);
        setRes(result.data);
    };

    return (
        <>
            <div>{JSON.stringify(res)}</div>
            <button onClick={onAxios}>axios-board-request</button>
        </>
    );
}

