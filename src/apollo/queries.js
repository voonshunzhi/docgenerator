import { gql } from "apollo-boost";

export const saveDoc = (id, content, docType) => {
  let str =
    `mutation{
    saveDoc(input: { title: "Demo", docType:${docType},content:` +
    `"` +
    content +
    `"` +
    `,docID:` +
    `"` +
    id +
    `"` +
    `
    }) {
      isModified
      modifiedID
      error
    }
  }`;

  if (!id) {
    str =
      `mutation{
    saveDoc(input: { title: "Demo", docType:${docType},content:` +
      `"` +
      content +
      `"` +
      `
    }) {
      isModified
      modifiedID
      error
    }
  }`;
  }

  return gql(str);
};

export const SAVE_DOC = gql`
  mutation {
    saveDoc(input: { title: "Demo", docType: LIVE, content: $content }) {
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
