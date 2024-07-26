import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { QUERY_OPT } from "./BoardDetail.queries";
import BoardDetailPageUI from "./BoardDetail.presenter";

export default function BoardDetailPageWrite() {
    const __router = useRouter();

    const convertDateToString = (dateString) => {
        return dateString.substring(0, dateString.indexOf("T"));
    };

    const { loading, data, error } = useQuery(QUERY_OPT, {
        variables: {
            number: parseInt(__router.query.number)
        }
    });

    if (error) {
        console.log(error.message);
        return <div>{error.message}</div>;
    }

    return (
        <BoardDetailPageUI
            loading={loading}
            data={data}
            pageTitle={"BoardDetail"}
            convertDateToString={convertDateToString}
        />
    );
}

