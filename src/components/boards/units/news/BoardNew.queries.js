import {gql} from '@apollo/client';

export const queryOpt = gql`
query fetchByNumber($number: Int) {
    fetchBoard(number: $number) {
        number
        writer
        title
        contents
    }
}
`;

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