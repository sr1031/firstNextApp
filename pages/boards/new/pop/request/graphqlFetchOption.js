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