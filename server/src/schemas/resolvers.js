const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const  signToken = require("../utils/jwt.utils");

const resolvers = {
    Query: {
      user: async (parent, args, context) => {
        if(context.user){
          const user = await User.findById(context.user._id);
          return user;
        }

        throw new AuthenticationError("Authentication is required")
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
      }
    }
  };
  
  module.exports = resolvers;