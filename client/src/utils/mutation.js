import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
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

export const ADD_USER = gql`
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

export const SAVE_MEAL = gql`
  mutation Mutation($idMeal: String!) {
    saveMeal(idMeal: $idMeal) {
      _id
      username
      email
      meals {
        idMeal
        strMeal
        strArea
        strCategory
        strInstructions
        strDrinkAlternate
        strTags
        strYoutube
        strSource
		    strMealThumb
        mealData {
          ingredient
          measure
        }
      }
    }
  }
`;

export const REMOVE_MEAL = gql`
  mutation RemoveMeal($idMeal: String!) {
    removeMeal(idMeal: $idMeal) {
      _id
      username
      email
      meals {
        idMeal
        strMeal
        strArea
        strCategory
        strInstructions
        strDrinkAlternate
        strTags
        strYoutube
        strSource
		    strMealThumb
        mealData {
          ingredient
          measure  
        }
      }
    }
  }
`;