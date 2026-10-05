"use client";

import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    // console.log(user);
    const {data , error} = await authClient.signUp.email({
        name: user.name as string,
        email: user.email as string,
        password: user.password as string
    }) 

    console.log(data , error);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Name</label>

                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                  />

                  <label className="label">Email</label>

                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />

                  <label className="label">Password</label>

                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />

                  <div>
                    <a className="link link-hover">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn bg-red-600 text-white mt-4"
                  >
                    Sign Up
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;