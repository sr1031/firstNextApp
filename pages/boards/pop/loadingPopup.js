import { LoadingGif } from "../../../styles/section04/04-03-dynamic-routing-mutation/loading/loading-style";
import {
    Popup,
    CloseBtn,
    NoFadeModal
} from "../../../styles/boards/boards-new/popup/popup-style";

export default function LoadingPopup ({modalState}) {
    const [showModal, clickModal] = modalState;

    const closeModal = () => {
        clickModal(!showModal);
    };

    return (
        <NoFadeModal show={showModal}>
            <Popup column>
                <CloseBtn onClick={closeModal}>❌</CloseBtn>
                <LoadingGif></LoadingGif>
            </Popup>
        </NoFadeModal>
    );
};