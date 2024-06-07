import {
    Modal,
    Popup,
    AddressInput,
    CloseBtn,
    Btn,
} from "../../../../styles/section01/boards-new/popup-style";

const PopUpPage = (props) => {
    const { clickModal, showModal } = props;
    const setInputAddr = (event) => {

    }
    return (
        <Modal show={showModal}>
            <Popup column>
            <CloseBtn onClick={clickModal}>❌</CloseBtn>
                <AddressInput placeholder="주소를 입력해주세요"></AddressInput>
                    <Btn>입력</Btn>
            </Popup>
        </Modal>
    );
};

export default PopUpPage;

