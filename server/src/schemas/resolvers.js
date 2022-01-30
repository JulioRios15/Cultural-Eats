const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require("../utils/jwt.utils");
const axios = require("axios").default;
const { encodeQueryData } = require("../utils/dataQuery");
const config = require('../config/vars');
const mealDbApiKey = config.mealDBApiKey;

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if(context.user){
          const user = await User.findById(context.user._id);
          return user;
        }

        throw new AuthenticationError("Authentication is required")
      },
      area: async (parent) => {
        const url = `http://themealdb.com/api/json/v1/${mealDbApiKey}/list.php?a=list`;
        
        try {
          const response = await axios.get(url);
          const areas = response.data.meals.map((item) => {
            return {
              name: item.strArea
            }
          });
          
          return areas

        } catch (error) {
          throw new ApolloError("Unable to fetch areas");
        }
      },
      category: async (parent) => {
        const url = `http://themealdb.com/api/json/v1/${mealDbApiKey}/list.php?c=list`;
        
        try {
          const response = await axios.get(url);
          const categories = response.data.meals.map((item) => {
            return {
              name: item.strCategory
            }
          });

          return categories

        } catch (error) {
          throw new ApolloError("Unable to fetch categories");
        }
      },
      mealShort: async(parent, args) => {
        const query = encodeQueryData(args);
        const url = `http://themealdb.com/api/json/v1/${mealDbApiKey}/filter.php?${query}`;

        try {
          const response = await axios.get(url);
          const mealsData = response.data.meals;

          if(mealsData == null || mealsData === undefined || mealsData === ""){
            throw new ApolloError("Unable to filter meals");
          }

          const mealsShort = mealsData.map((item) => {
            return {
              name: item.strMeal,
              image: item.strMealThumb,
              idMeal: item.idMeal
            }
          });

          return mealsShort;


        } catch (error) {
          throw new ApolloError("Unable to filter meals");
        }
      }
    },
    Mutation: {
      login: async (parent, {email, password}) => {
        const user = await User.findOne({ email });

        if(!user){
          throw new AuthenticationError("Incorrect credentials");
        }

        const validPassword = await user.validatePassword(password);

        if(!validPassword){
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);

        return { token, user };
      },
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      },
      saveMeal: async (parent, { idMeal }, context) => {
        if(context.user){
          try {
            const url = `http://themealdb.com/api/json/v1/${mealDbApiKey}/lookup.php?i=${idMeal}`;
            const response = await axios.get(url);
            const mealData = response.data.meals[0];
            const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $push: { meals: mealData } },
              { new: true }
            );

            return updatedUser;

          } catch (error) {
            throw new ApolloError(error.message);
          }
        }

        throw new AuthenticationError("Authentication is required")
      },
      removeMeal: async (parent, { idMeal }, context) => {
        if(context.user){
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { meals: {idMeal} } },
            { new: true }
          );

          return updatedUser;
        }

        throw new AuthenticationError("Authentication is required")
      }
    }
  };
  
  module.exports = resolvers;