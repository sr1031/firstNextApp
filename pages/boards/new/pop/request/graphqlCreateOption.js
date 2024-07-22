import { gql } from "@apollo/client";
export const mutationOpt = gql`
    mutation createNewBoard(
        $writer: String
        $title: String
        $contents: String
    ) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`;

