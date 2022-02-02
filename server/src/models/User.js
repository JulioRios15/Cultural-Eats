const mongoose = require('mongoose');
const { Schema } = mongoose;
const mealSchema = require('./Meal');
const bcrypt = require('bcrypt');
const config = require('../config/vars');

const userSchema = new Schema(
    {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    meals: [mealSchema]
  },
  {
      timestamps: true,
      toJSON: {
          virtuals: true
      },
      toObject: {
        virtuals: true
      }
  }
  );

  // hash password on pre-save
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = config.saltWorkFactor;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  userSchema.methods.validatePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password);
  }
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;