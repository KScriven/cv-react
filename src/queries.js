import { gql } from "@apollo/client";

const GET_MY_DATA = gql`
  { 
    intro
    emailAddress
    linkedIn
  }
`;

export default GET_MY_DATA