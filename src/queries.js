import { gql } from "@apollo/client";

const GET_INTRO = gql`
  { 
    intro
  }
`;

const GET_CONTACT = gql`
  { 
    contact {
      emailAddress,
      
    }
  }
`;

export {
  GET_INTRO,
  GET_CONTACT
}