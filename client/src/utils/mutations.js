import {
  gql
} from '@apollo/client';

export const ADD_USER = gql `
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_PRODUCT = gql `
  mutation saveProduct($productData: ID!) {
    saveProduct(productData: $productData) {
      _id
      username
      favoriteProducts {
        _id
      }
    }
  }
`;