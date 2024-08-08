import { gql } from '@apollo/client';

export const GET_ALL_EXERCICES = gql`
    query GetAllExercices{
        allExercices{
            id
            nom
            series
            repetitions
            repos
        }
    }
`