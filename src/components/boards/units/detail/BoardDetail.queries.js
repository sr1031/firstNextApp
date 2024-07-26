import { gql } from "@apollo/client";

export const QUERY_OPT = gql`
        query getBoard($number: Int) {
            fetchBoard(number: $number) {
                number
                writer
                title
                contents
                createdAt
            }
        }
    `;