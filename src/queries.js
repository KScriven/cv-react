import { gql } from "@apollo/client";

const GET_MY_DATA = gql`
  { 
    intro
    emailAddress
    linkedIn
  }
`;

const GET_MY_BLOGS = gql`
  query blogs { 
    intro
    myBiggestTakeAways
    theDailyGrind
    theThingsILove
    theThingsIDisLike
    interestingFacts
  }
`;

export {
  GET_MY_DATA,
  GET_MY_BLOGS
}