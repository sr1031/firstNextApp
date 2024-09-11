import { gql } from "@apollo/client";

export const QUERY_JEWELLEYLIST = gql`
    query fetchJewellery {
        fetchAll {
            jewelleryId,
            name,
            englishName,
            price
        }
    }
`