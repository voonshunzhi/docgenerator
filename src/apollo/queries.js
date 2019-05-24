import { gql } from "apollo-boost";

export const saveDoc = (id, content, docType) => {
  let str = ` mutation {
     saveDoc(
       input: {
         title: "Demo"
         docType: ${docType}
         content: "${content}"
         docID: "${id}"
       }
     ) {
       isModified
       modifiedID
       error
     }
   }`;

  console.log(str);
  return gql(str);
};

export const getDoc = (id, doctype) => {
  let str = ` query {
    getDoc(id: "${id}", docType: ${doctype}) {
      _id
      title
      content
    }
  }`;
  return gql(str);
};
