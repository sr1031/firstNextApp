import { useState } from "react";
import { mutationOpt } from "./BoardNew.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardRegistPageUI from "./BoardNew.presenter";

export default function BoardRegistPageWrite() {
    const [allModals, setAllModals] = useState({
        showModal: false,
        loadingModal: false
    });

    const [allInputValues, setAllInputValues] = useState({
        userName: "",
        userPassword: "",
        title: "",
        content: "",
        mainAddress: "",
        detailAddress: "",
        ytLink: "",
        images: [],
        mainOption: ""
    });

    //--------

    const [__errorReasons, __setErrorReasons] = useState([]);
    const __router = useRouter();
    const [__createMutation] = useMutation(mutationOpt);

    const __validate = () => {
        const { userName, userPassword, title, content } = allInputValues;
        const _reasons = [];
        if (!userName) _reasons.push("name");

        if (!userPassword) _reasons.push("password");

        if (!title) _reasons.push("title");

        if (!content) _reasons.push("content");

        if (_reasons.length === 0) {
            __setErrorReasons([]);
            return true;
        } else {
            __setErrorReasons(_reasons);
            return false;
        }
    };

    const __changeLoadingModal = () => {
        setAllModals((prev) => {
            return { ...prev, ["loadingModal"]: !prev["loadingModal"] };
        });
    };

    //------

    const onChangeInput = (event) => {
        setAllInputValues((prev) => {
            if (!event.target.name.includes("image"))
                return { ...prev, [event.target.name]: event.target.value };
            else {
                const nowImages = [...prev.images, event.target.value];
                return { ...prev, ["images"]: nowImages };
            }
        });
    };

    const onModalShow = (modalName) => (event) => {
        const name = event.target.name ? event.target.name : modalName;
        setAllModals((prev) => {
            return { ...prev, [name]: !prev[name] };
        });
    };

    const displayError = (reason, input) => {
        return __errorReasons.includes(reason) && !input;
    };

    const clickReqModal = async () => {
        if (!__validate()) {
            console.log("다시 입력바람.");
            return;
        }

        __changeLoadingModal();
        try {
            const mRes = await __createMutation({
                variables: {
                    writer: allInputValues.userName,
                    title: allInputValues.title,
                    contents: allInputValues.content
                }
            });

            __router.push(`/boards/${mRes.data.createBoard.number}`);
        } catch (error) {
            console.log(error.message);
            __changeLoadingModal();
        }
    };

    return (
        <BoardRegistPageUI
            states={[allInputValues, allModals]}
            funcs={[onChangeInput, onModalShow, clickReqModal, displayError]}
        />
    );
}

