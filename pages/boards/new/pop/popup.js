import { useState } from "react";
import {
    Modal,
    Popup,
    AddressInput,
    CloseBtn,
    Btn
} from "../../../../styles/section01/boards-new/popup-style";

const PopUpPage = (props) => {
    const { modalState, addrState } = props;
    const [showModal, clickModal] = modalState;
    const [addr, setAddr] = addrState;
    const [ inputAddr, setInputAddr ] = useState("");
    const onChangeAddrInModal = (event) => {
        setInputAddr(event.target.value);
    };
    const noSaveClose = () => {
        if (addr === "") 
            setAddr("");
        clickModal();
    };

    const saveClose = () => {
        setAddr(inputAddr);
        clickModal();
    };

    return (
        <Modal show={showModal}>
            <Popup column>
                <CloseBtn onClick={noSaveClose}>❌</CloseBtn>
                <AddressInput
                    placeholder="주소를 입력해주세요"
                    onChange={onChangeAddrInModal}
                ></AddressInput>
                <Btn onClick={saveClose}>입력</Btn>
            </Popup>
        </Modal>
    );
};

export default PopUpPage;

