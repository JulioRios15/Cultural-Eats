const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type MealShort {
    name: String
    image: String
    idMeal: String
  }

  type MealData {
    ingredient: String
    measure: String
  }

  type Meal {
    idMeal: String
    strMeal: String
    strArea: String
    strCategory: String
    strInstructions: String
    strDrinkAlternate: String
    strTags: String
    strYoutube: String
    strSource: String
    strMealThumb: String
    mealData: [MealData]
    instructions: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  type User {
    _id: ID
    username: String
    email: String
    meals: [Meal]
  }

  type Area {
    name: String
  }

  type Category {
    name: String
  }

  type Query {
    me: User
    area: [Area]
    category: [Category]
    mealShort(a: String, c: String i: String): [MealShort]
    meal(idMeal: String!): Meal
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMeal(idMeal: String!): User
    removeMeal(idMeal: String!): User
  }
`;

module.exports = typeDefs;
