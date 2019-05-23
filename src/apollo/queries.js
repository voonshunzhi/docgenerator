import { gql } from "apollo-boost";

export const SAVE_DOC = gql`
  mutation {
    saveDoc(
      input: {
        title: "insert another doc"
        docType: LIVE
        content: "some random string whoooo"
        docID: "00000000d2f07b50a6797263"
      }
    ) {
      isModified
      modifiedID
      error
    }
  }
`;

export const QUERY = gql`
  query {
    getDoc(id: "00000000ece58d4e4839725c", docType: LIVE) {
      _id
      title
      content
    }
  }
`;
