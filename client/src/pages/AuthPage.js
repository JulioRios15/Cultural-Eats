import React from "react";


export default function AuthPage() {
    return (
      <div>       
        <p class="tip">Click on button in image container</p>
  <div class="cont">
    <div class="form sign-in">
      <h2>Welcome back to Cultural Eats,</h2>
      <label>
        <span>Email</span>
        <input type="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" />
      </label>
      <p class="forgot-pass">Forgot Password?</p>
      <button type="button" class="forgot password">Forgot Password?</button>
      <button type="button" class="submit">Sign In</button>
      <button type="button" class="fb-btn">Connect with <span>Meta</span></button>
    </div>
    <div class="sub-cont">
      <div class="img">
        <div class="img__text m--up">
          <h2>New here?</h2>
          <p>Sign up and discover great cultures and Recipes!</p>
        </div>
        <div class="img__text m--in">
          <h2>One of us?</h2>
          <p>If you already have an account, please sign in.</p>
        </div>
        <div class="img__btn">
          <span class="m--up">Sign Up</span>
          <span class="m--in">Sign In</span>
        </div>
      </div>
      <div class="form sign-up">
        <h2>Welcome home,</h2>
        <label>
          <span>Name</span>
          <input type="text" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" />
        </label>
        <button type="button" class="submit">Sign Up</button>
        <button type="button" class="fb-btn">Join with <span>Meta</span></button>
      </div>
    </div>
  </div>
      </div>
    );
  }