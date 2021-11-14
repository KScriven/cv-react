import { gql } from "@apollo/client";

const GET_MY_DATA = gql`
  { 
    intro
    emailAddress
    linkedIn
  }
`;

const GET_MY_BLOGS = gql`
  { 
    intro
    emailAddress
    linkedIn
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  GET_MY_DATA,
  GET_MY_BLOGS
}