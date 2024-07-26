import { LoadingGif } from "./LoadingPopup.style";
import {
    Popup,
    CloseBtn,
    NoFadeModal
} from "../Popup.style";

export default function LoadingPopup ({modalState}) {
    const [loadingShowModal, onModalShow] = modalState;

    return (
        <NoFadeModal show={loadingShowModal}>
            <Popup column>
                <CloseBtn onClick={onModalShow("loadingModal")}>❌</CloseBtn>
                <LoadingGif></LoadingGif>
            </Popup>
        </NoFadeModal>
    );
};