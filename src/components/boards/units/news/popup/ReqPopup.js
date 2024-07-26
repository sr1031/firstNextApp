import { useQuery } from "@apollo/client";
import {
    Modal,
    Popup,
    CloseBtn
} from "../../../../../../styles/boards/boards-new/popup/popup-style";
import { queryOpt } from "../BoardNew.queries";

const ReqPopUpPage = ({modalState, res}) => {
    const [showModal, clickModal] = modalState;

    const q = useQuery(queryOpt, {
        variables: {
            number: res.number
        }
    })

    return (
        <Modal show={showModal}>
            <Popup column>
                <CloseBtn onClick={clickModal("queryModal")}>❌</CloseBtn>
                <div>
                    createBoardNumber:{res.number}
                    <br />
                    fetchBoardInfo:{JSON.stringify(q.data, null, 4)}
                </div>
            </Popup>
        </Modal>
    );
};

export default ReqPopUpPage;

