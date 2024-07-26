import { useState } from "react";
import {
    Modal,
    Popup,
    AddressInput,
    CloseBtn,
    Btn
} from "./Popup.style";

const PopUpPage = ({ modalState, onChangeFunc }) => {
    const [showModal, clickModal] = modalState;
    const [inputAddress, setInputAddress] = useState("");
    const onChangeInput = onChangeFunc;

    const saveClose = (event) => {
        const eventDummy = { target: { name: "mainAddress", value: inputAddress } };
        onChangeInput(eventDummy);
        (clickModal("showModal"))(event);
    };

    const onChangeInputAddr = (event) => {
        setInputAddress(() => event.target.value); 
    }

    return (
        <Modal show={showModal}>
            <Popup column>
                <CloseBtn onClick={clickModal("showModal")}>❌</CloseBtn>
                <AddressInput
                    placeholder="주소를 입력해주세요"
                    onChange={onChangeInputAddr}
                ></AddressInput>
                <Btn
                    onClick={saveClose}
                    name="showModal"
                >
                    입력
                </Btn>
            </Popup>
        </Modal>
    );
};

export default PopUpPage;

