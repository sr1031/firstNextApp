import { useQuery } from "@apollo/client";
import { QUERY_JEWELLEYLIST } from "./ProductList.queries";

export default function useProductList() {
    const { loading, data, error } = useQuery(QUERY_JEWELLEYLIST);
    return {
        loading,
        data,
        error
    };
}
