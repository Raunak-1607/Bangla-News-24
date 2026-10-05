
"use client"
import { authClient } from "@/lib/auth-client";
import React from "react";

const SignInPage = () => {

    const onSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
         const formData = new FormData(e.currentTarget);
        
            const user = Object.fromEntries(formData.entries());
        
            // console.log(user);
            const {data , error} = await authClient.signIn.email({
               
                email: user.email as string,
                password: user.password as string,
                callbackURL:"/"
            })
            
            console.log(data);
            
    }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" name="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
